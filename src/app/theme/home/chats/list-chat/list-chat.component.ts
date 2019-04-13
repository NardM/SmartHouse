import { Component, NgZone, OnDestroy, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { RouterExtensions } from "nativescript-angular";
import { Page } from "tns-core-modules/ui/page";
import { Subscription } from "rxjs";
import { ConstructionSite } from "~/app/service/chat/construction-site.model";


@Component({
    selector: "hs-list-chats",
    moduleId: module.id,
    templateUrl: "./list-chat.component.html",
    styleUrls: ["./list-chat.component.scss"]
})
export class ListChatsComponent implements OnInit, OnDestroy {

    constructor() {
    }



    ngOnDestroy(): void {
    }

    onNavigatedTo(): void {
    }

    ngOnInit(): void {

    }

    counter(i: number) {
        return new Array(i);
    }

}
