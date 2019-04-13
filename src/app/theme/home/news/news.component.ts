import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { registerElement } from "nativescript-angular";
import { NewsItem } from "~/app/model/news.model";

@Component({
    selector: "hs-news",
    moduleId: module.id,
    styleUrls: ["./news.component.scss"],
    templateUrl: "./news.component.html"
})
export class NewsComponent implements OnInit {

    data: Array<NewsItem> ;

    constructor() {
        this.data = [];
        const data = new NewsItem({
            id: 1,
            title: "18.04.19 с 10:00 до 13:00",
            text: "Будет плановое отключение электричества из-Будет плановое отключение электричества из-заБудет плановое отключение электричества из-заза",
            url: ""
        });
        this.data = [data, data, data, data, data,data, data,];
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

}
