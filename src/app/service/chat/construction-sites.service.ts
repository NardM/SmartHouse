import { EventEmitter, Injectable } from "@angular/core";
import { knownFolders, Folder, File } from "tns-core-modules/file-system";
import { Kinvey } from "kinvey-nativescript-sdk";
import { BehaviorSubject, Observable } from "rxjs";
import { Config } from "../shared/config";
import { ConnectivityStatusService } from "./connectivity-status.service";
import { ConstructionSite } from "./construction-site.model";

const editableProperties = [
    "address",
    "hasBoots",
    "hasEyeProtection",
    "hasHardHats",
    "hasHearingProtection",
    "hasRespiratoryProtection",
    "name",
    "notes"
    // "imageIds"
];

@Injectable()
export class ConstructionSitesService {

    private static cloneUpdateModel(constructionSite: ConstructionSite): object {
        // return null;
        // tslint:disable-next-line:ban-comma-operator
        return editableProperties.reduce((prev, current) => (prev[current] = constructionSite[current], prev),
            {
                _id: constructionSite.id,
                imageIds: JSON.stringify(constructionSite.imageIds)
            });
    }

    allItems: BehaviorSubject<any> = new BehaviorSubject([]);

    isOnline: boolean = false;

    private onlineStatus: EventEmitter<boolean> = new EventEmitter();
    private allConstructionSites: Array<ConstructionSite> = [];
    private constructionSitesStore = Kinvey.DataStore.collection<any>("ConstructionSites");

    private isLoggedIn: boolean = false;

    constructor(private connectivityStatusService: ConnectivityStatusService) {
        this.isOnline = this.connectivityStatusService.getCurrentStatus();
        this.connectivityStatusService.statusChangeEvent.subscribe((status) => {
            if (!this.isOnline && status) {
                this.sync();
            }

            this.isOnline = status;
        });
    }

    updateData() {
        this.ensureLoggedIn().then(() => {
            this.load().subscribe(((constructionSitesRaw: Array<any>) => {
                const allConstructionSites = [];
                constructionSitesRaw.forEach((constructionSiteData: any) => {
                    constructionSiteData.id = constructionSiteData._id;
                    const constructionSite = new ConstructionSite(constructionSiteData);

                    allConstructionSites.push(constructionSite);
                });

                this.allItems.next(allConstructionSites);
            }), (err) => {
                console.log(err);
            });
        });
    }

    getConstructionSiteById(id: string): Observable<ConstructionSite> {
        if (!id) {
            return;
        }

        const findQuery: Observable<any> = this.constructionSitesStore.findById(id);

        this.trackQueryOnlineStatus(findQuery);

        return findQuery;
    }

    sync(): Promise<any> {
        return this.ensureLoggedIn().then(() => {
            this.constructionSitesStore.sync();
        });
    }

    update(constructionSiteModel: ConstructionSite): Promise<any> {
        return new Promise((resolve) => {
            const updateModel = ConstructionSitesService.cloneUpdateModel(constructionSiteModel);

            this.deleteCurrentDbFileIfNeeded(constructionSiteModel).then(() => {
                const promise = this.constructionSitesStore.save(updateModel).then(() => {
                    this.sync();
                });

                resolve(promise);
            });
        });
    }

    // deletes the image from DB if the update model is with different OR none image
    deleteCurrentDbFileIfNeeded(constructionSite: ConstructionSite) {
        return new Promise((resolve) => {
            console.log("online: " + this.isOnline);
            if (this.isOnline && constructionSite.id) {
                this.getConstructionSiteById(constructionSite.id).toPromise().then((itemRaw) => {
                    const itemFromDb = new ConstructionSite(itemRaw);

                    // now we've got the current site from db, so we can resolve here and let next ops finish asynchronously
                    resolve();

                    if (itemFromDb.getImageUrl() && (!constructionSite.getImageUrl() || itemFromDb.getImageUrl() !== constructionSite.getImageUrl())) {
                        Kinvey.Files.removeById(itemFromDb.getImageFileId()).then(() => { // file remove OK
                            console.log("file " + itemFromDb.getImageFileId() + " removed from DB");
                        }, (reason) => { // file remove rejected
                            console.log("file " + itemFromDb.getImageFileId() + " remove rejected:" + reason);
                        }).catch((err) => { // file remove threw exception
                            console.log("file " + itemFromDb.getImageFileId() + " remove threw exception:" + err);
                        });
                    }
                }).catch((err) => {
                    console.log(err);
                    resolve();
                });
            } else { // if offline, resolve without trying to delete remotely
                resolve();
            }
        });
    }

    deleteConstructionSiteById(id: string): Promise<any> {
        if (!id) {
            return;
        }

        return this.constructionSitesStore.removeById(id).then(() => {
            this.allConstructionSites = this.allConstructionSites.filter((site) => site.id === id);
        });
    }

    // uploadImage(imageSource: ImageSource): Promise<any> {
    uploadImage(tempFilePath: string): Promise<any> {
        // // TODO: revise this with logic taking/copying the original image
        // console.log("saving image as temp file with quality 50");
        // imageSource.saveToFile(tempFilePath, "jpg", 50);

        const imageFile = File.fromPath(tempFilePath);
        const imageContent = imageFile.readSync();

        const metadata = {
            filename: imageFile.name,
            mimeType: this.getMimeType(imageFile.extension),
            size: imageContent.length,
            public: true
        };

        return Kinvey.Files.upload(imageFile, metadata)
            .then((uploadedFile: any) => {
                const query = new Kinvey.Query();
                query.equalTo("_id", uploadedFile._id);

                return Kinvey.Files.find(query);
            }).catch((err) => {
                console.log(err);
            })
            .then((files: Array<any>) => {
                if (files && files.length) {
                    const file = files[0];

                    console.log("file: ");
                    console.log(file);

                    return file;
                } else {
                    Promise.reject(new Error("No items with the given ID could be found."));
                }
            });
    }

    private load(): Observable<Array<any>> {
        const sortByNameQuery = new Kinvey.Query();
        sortByNameQuery.ascending("name");
        const findQuery = this.constructionSitesStore.find(sortByNameQuery);

        this.trackQueryOnlineStatus(findQuery);

        return findQuery;
    }

    // subscribes to query results and reports whether it passed OK or failed due to network loss
    private trackQueryOnlineStatus(kinveyQuery: Observable<any>) {
        kinveyQuery.subscribe(null,
            (error: Kinvey.BaseError) => {
                console.log("Kinvey error:" + error);
                if (error.message.indexOf("offline") !== -1) {
                    this.connectivityStatusService.reportConnectivity(false);
                }
            }, () => {
                console.log("both sets of data (local and network) have been retrieved");
                this.connectivityStatusService.reportConnectivity(true);
            });
    }

    private ensureLoggedIn(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.isLoggedIn) {
                resolve();
            } else {
                setTimeout(() => {
                    try {
                        if (!!Kinvey.User.getActiveUser()) {
                            this.isLoggedIn = true;
                            resolve();
                        } else {
                            return Kinvey.User.login(Config.kinveyUsername, Config.kinveyPassword).then(() => {
                                this.isLoggedIn = true;
                                resolve();
                            });
                        }
                    } catch (err) {
                        alert("Error calling Kinvey, check for valid configuration. " + err);

                        reject(err);
                    }
                }, 2000);
            }
        });
    }

    private getMimeType(imageExtension: string): string {
        const extension = imageExtension === "jpg" ? "jpeg" : imageExtension;

        return "image/" + extension.replace(/\./g, "");
    }
}
