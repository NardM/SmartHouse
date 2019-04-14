import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { registerElement, RouterExtensions } from "nativescript-angular";
import { NewsItem } from "~/app/model/news.model";
import { Page } from "tns-core-modules/ui/page";
import { CurrentNewService } from "~/app/theme/home/news/shared/current-new.service";

@Component({
    selector: "hs-news",
    moduleId: module.id,
    styleUrls: ["./news.component.scss"],
    templateUrl: "./news.component.html"
})
export class NewsComponent implements OnInit {

    data: Array<NewsItem> ;

    constructor(private page: Page,
                private newsService: CurrentNewService,
                private routerExtensions: RouterExtensions) {
        this.data = [];
        const dataNew = new NewsItem({
            id: 2,
            title: "18.04.19 с 10:00 до 13:00",
            text: "Будет плановое отключение электричества из-Будет плановое отключение электричества из-заБудет плановое отключение электричества из-заза",
            seenCount: 1,
            date: 'Вчера в 15:00',
            url: "",
            author: "Ваш УК"
        });
        const dataNew2 = new NewsItem({
            id: 2,
            title: "",
            text: "В подъезде была найдена кошка. Хозяевам обращаться в 28 квартиру",
            seenCount: 0,
            date: 'Вчера в 15:04',
            url: "",
            author: "Квартира 28"
        });
        const data = new NewsItem({
            id: 1,
            title: "18.04.19 с 10:00 до 13:00",
            text: "Будет плановое отключение электричества из-Будет плановое отключение электричества из-заБудет плановое отключение электричества из-заза",
            seenCount: 0,
            date: '10.04.2019 в 20:00',
            url: "",
            author: "Ваш УК"
        });
        this.data = [dataNew,dataNew2, data, data, data, data, data, data];
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onNavigate(item: NewsItem): void {
        this.newsService.currentItem = item;
        this.routerExtensions.navigate(["/detail-news"], {
            animated: true,
            transition: {
                name: "slideLeft",
                duration: 200,
                curve: "easeIn"
            }
        });
    }

}
