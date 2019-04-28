import { Component, Input, NgZone, OnDestroy, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Subscription } from "rxjs";
import { RouterExtensions } from "nativescript-angular";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "hs-contact-item",
    moduleId: module.id,
    templateUrl: "./contact-item.component.html",
    styleUrls: ["./contact-item.component.scss"]

})
export class ContactItemComponent implements OnInit, OnDestroy {

    @Input() data: any = {};

    constructor() {
    }

    ngOnDestroy(): void {
    }

    ngOnInit(): void {

    }

}
