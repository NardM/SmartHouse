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
    data: any;

    constructor() {
        this.data = {
            url: "https://www.technouz.com/wp-content/uploads/2017/11/angular-logo.png",
            name: "Анна Алексеева",
            address: "ул. Пушкина 12, 2"
        };
    }

    ngOnDestroy(): void {
    }

    ngOnInit(): void {

    }

}
