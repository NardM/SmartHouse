import { Component, Input, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NewsItem } from "~/app/model/news.model";
import { CurrentNewService } from "~/app/theme/home/news/shared/current-new.service";
import { RouterExtensions } from "nativescript-angular";
import { TextField } from "tns-core-modules/ui/text-field";

@Component({
    selector: "hs-item-detail-new",
    moduleId: module.id,
    templateUrl: "./detail-new.component.html",
    styleUrls: ["./detail-new.component.scss"]
})
export class DetailNewComponent implements OnInit {

    item: NewsItem;
    show: boolean = false;
    textfield: TextField;

    constructor(private newsService: CurrentNewService,
                private routerExtensions: RouterExtensions) {
        this.item = this.newsService.currentItem;
        if (this.item.id === 2){
            this.show = true;
        }
    }

    ngOnInit(): void {
    }

    chat(message: string) {
        this.textfield.text = "";
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    goBack(): void {
        this.routerExtensions.back();
    }
}
