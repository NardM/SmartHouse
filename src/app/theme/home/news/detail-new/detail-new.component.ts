import { Component, Input, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NewsItem } from "~/app/model/news.model";
import { CurrentNewService } from "~/app/theme/home/news/shared/current-new.service";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "hs-item-detail-new",
    moduleId: module.id,
    templateUrl: "./detail-new.component.html",
    styleUrls: ["./detail-new.component.scss"]
})
export class DetailNewComponent implements OnInit {

    item: NewsItem;

    constructor(private newsService: CurrentNewService,
                private routerExtensions: RouterExtensions) {
        this.item = this.newsService.currentItem;
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    goBack(): void {
        this.routerExtensions.back();
    }
}
