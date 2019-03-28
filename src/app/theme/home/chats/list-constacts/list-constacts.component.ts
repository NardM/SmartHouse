import { Component, NgZone, OnDestroy, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Subscription } from "rxjs";
import { RouterExtensions } from "nativescript-angular";
import { Page } from "tns-core-modules/ui/page";


@Component({
    selector: "hs-list-contacts",
    moduleId: module.id,
    templateUrl: "./list-constacts.component.html",
    styleUrls: ["./list-constacts.component.scss"]

})
export class ListContactsComponent implements OnInit, OnDestroy {

    constructionSites: ObservableArray<any>;
    isLoading: boolean;
    statusChangeSubscr: Subscription;

    constructor(
        private _constructionSitesService: ConstructionSiteService,
        private _routerExtensions: RouterExtensions,
        private _page: Page,
        private _ngZone: NgZone,
        private connectivityStatusService: ConnectivityStatusService
    ) {
        _page.on("navigatedTo", (args) => this.onNavigatedTo());

        this.statusChangeSubscr = this.connectivityStatusService.statusChangeEvent.subscribe((status) => this.onConnectivityStatusChange(status));
    }

    onConnectivityStatusChange(newStatus) {
        if (newStatus) {
            this.refreshData();
        }
    }

    ngOnDestroy(): void {
        this.statusChangeSubscr.unsubscribe();
    }

    onNavigatedTo(): void {
        this.refreshData();
    }

    refreshData() {
        this._ngZone.run(() => {
            this.isLoading = true;
        });

        this._constructionSitesService.updateData();
    }

    ngOnInit(): void {
        this._constructionSitesService.allItems.subscribe((allConstructionSites) => {
            this._ngZone.run(() => {
                this.constructionSites = new ObservableArray<ConstructionSite>(allConstructionSites);
                this.isLoading = false;
            });
        });
    }

    counter(i: number) {
        return new Array(i);
    }

    onAddButtonTap(): void {
        this._routerExtensions.navigate(["/construction-sites/construction-site-add"],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });
    }

    onConstructionSiteItemTap(args): void {
        const tappedConstructionSiteItem = args.view.bindingContext;

        this._routerExtensions.navigate(["/construction-sites/construction-site-detail", tappedConstructionSiteItem.id],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });
    }

}
