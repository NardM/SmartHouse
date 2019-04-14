import { Component, Input, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NewsItem } from "~/app/model/news.model";
import { Page } from "tns-core-modules/ui/page";
import { CurrentNewService } from "~/app/theme/home/news/shared/current-new.service";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "hs-item-new",
    moduleId: module.id,
    templateUrl: "./item-new.component.html",
    styleUrls: ["./item-new.component.scss"]
})
export class ItemNewComponent implements OnInit {

    @Input() item: NewsItem;

    constructor(private page: Page,
                private newsService: CurrentNewService,
                private routerExtensions: RouterExtensions) {
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onNavigate(item: NewsItem): void {
        this.newsService.currentItem = item;
        this.routerExtensions.navigate(["home", "detail-news"], {
            animated: true,
            transition: {
                name: "slideLeft",
                duration: 200,
                curve: "easeIn"
            }
        });
    }
}
