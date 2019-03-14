import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { RouterExtensions } from "nativescript-angular";
import { CurrentService, ServiceService } from "~/app/theme/home/service/service.service";
import {ImageSource, fromFile, fromResource, fromBase64} from "tns-core-modules/image-source";
import {Folder, path, knownFolders} from "tns-core-modules/file-system";
import * as imagepicker from "nativescript-imagepicker";


@Component({
    selector: "hs-item-service",
    moduleId: module.id,
    templateUrl: "./item-service.component.html"
})
export class ItemServiceComponent implements OnInit {

    currentItem: CurrentService = null;
    public store: AddStore;
    public metadata: any;
    imageAssets = [];
    imageSrc: any;
    isSingleMode: boolean = true;
    thumbSize: number = 80;
    previewSize: number = 300;
    imageUpload: boolean = false;

    constructor(private activateRoute: ActivatedRoute,
                private serviceService: ServiceService,
                private routerExtensions: RouterExtensions) {
        this.currentItem = serviceService.getCurrentService();
    }

    ngOnInit(): void {
        this.store = new AddStore("test name" , "test\nsdfgfsdf");
        this.metadata = require("./item.service.json");
    }

    onUploadLocalImage(){
        const folder: Folder = <Folder> knownFolders.currentApp();
        const folderPath: string = path.join(folder.path);
        const imageFromLocalFile: ImageSource = <ImageSource> fromFile(folderPath);
    }

    onSubmit(){

    }


    goBack(): void {
        this.routerExtensions.back();
    }
    public onSelectMultipleTap() {
        this.isSingleMode = false;

        let context = imagepicker.create({
            mode: "multiple"
        });
        this.startSelection(context);
    }

    public onSelectSingleTap() {
        this.isSingleMode = true;

        let context = imagepicker.create({
            mode: "single"
        });
        this.startSelection(context);
    }

    private startSelection(context) {
        let that = this;

        context
            .authorize()
            .then(() => {
                that.imageAssets = [];
                that.imageSrc = null;
                return context.present();
            })
            .then((selection) => {
                console.log("Selection done: " + JSON.stringify(selection));
                that.imageSrc = that.isSingleMode && selection.length > 0 ? selection[0] : null;

                // set the images to be loaded from the assets with optimal sizes (optimize memory usage)
                selection.forEach(function (element) {
                    element.options.width = that.isSingleMode ? that.previewSize : that.thumbSize;
                    element.options.height = that.isSingleMode ? that.previewSize : that.thumbSize;
                });

                that.imageAssets = selection;
                that.imageUpload = true;
            }).catch(function (e) {
            console.log(e);
        });
    }
}

export class AddStore {
    public name: string;
    public description: string;

    constructor(name: string, description: string,) {
        this.name = name;
        this.description = description;
    }
}
