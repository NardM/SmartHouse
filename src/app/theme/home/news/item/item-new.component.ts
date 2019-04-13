import { Component, Input, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NewsItem } from "~/app/model/news.model";

@Component({
    selector: "hs-item-new",
    moduleId: module.id,
    templateUrl: "./item-new.component.html",
    styleUrls: ["./item-new.component.scss"]
})
export class ItemNewComponent implements OnInit {

    @Input() item: NewsItem;

    constructor() {
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
