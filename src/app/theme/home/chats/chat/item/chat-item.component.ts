import { Component, NgZone, OnDestroy, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Subscription } from "rxjs";
import { RouterExtensions } from "nativescript-angular";
import { Page } from "tns-core-modules/ui/page";


@Component({
    selector: "hs-chat-item",
    moduleId: module.id,
    templateUrl: "./chat-item.component.html",
    styleUrls: ["./chat-item.component.scss"]

})
export class ChatItemComponent implements OnInit, OnDestroy {

    data: any;

    constructor(
    ) {
        this.data = {
            url: 'https://www.technouz.com/wp-content/uploads/2017/11/angular-logo.png',
            name: 'Анна Алексеева',
            date: 'Сегодня 23:00',
            message: 'На каком этаже?'
        }
    }

    ngOnDestroy(): void {
    }



    ngOnInit(): void {

    }


}
