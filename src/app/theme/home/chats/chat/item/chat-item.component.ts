import { Component, Input, NgZone, OnDestroy, OnInit } from "@angular/core";
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

    @Input() data: any;

    constructor() {
        this.data = {
            url: 'https://www.technouz.com/wp-content/uploads/2017/11/angular-logo.png',
            name: 'Анна Алексеева',
            date: 'Сегодня 10:00',
            message: 'Пятнистая-серая? Если да, то это моя'
        }
    }

    ngOnDestroy(): void {
    }

    ngOnInit(): void {

    }

}
