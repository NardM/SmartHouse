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
            id: 1,
            title: "18.04.19 с 10:00 до 13:00",
            text: "Будет плановое отключение электричества из-Будет плановое отключение электричества из-заБудет плановое отключение электричества из-заза",
            seenCount: 0,
            date: '10.04.19',
            url: "",
            author: "Ваш УК",
            maxLines: 2
        });
        const dataNew2 = new NewsItem({
            id: 2,
            title: "",
            text: "В подъезде была найдена кошка. Хозяевам обращаться в 28 квартиру",
            seenCount: 1,
            date: '10.04.19',
            url: "",
            author: "Квартира 28",
            maxLines: 2
        });
        const dataNew3 = new NewsItem({
            id: 3,
            title: "Отремонтирована детская площадка.",
            text: "Дорогие жители! Рады сообщить, что отремонтирована детская площадка во дворе вашего дома. Теперь вашим детишкам будет комфортнее проводить время во дворе.",
            seenCount: 0,
            date: '',
            url: "",
            author: "Ваш УК",
            maxLines: 3
        });
        const dataNew4 = new NewsItem({
            id: 4,
            title: "Собрание жильцов в субботу",
            text: "Дорогие жители нашего дома, на собрании мы выберем староста 2 подъезда",
            seenCount: 0,
            date: '10.04.19',
            url: "",
            author: "Ваш УК",
            maxLines: 2
        });
        const dataNew5 = new NewsItem({
            id: 4,
            title: "Информация от МУП Водоконал",
            text: "Телефонограмма МУП Водоканал: в связи с аварийными работами на водопроводе d 50 мм по адресу -Декабристов,127, 04.03.2019, с 9:00 часов и до окончания работ без ХВС ж.д Декабристов, 127\n" +
                "\n",
            seenCount: 0,
            date: '10.04.19',
            url: "",
            author: "Ваш УК",
            maxLines: 3
        });
        const dataNew6 = new NewsItem({
            id: 4,
            title: "Дорогие жильцы нашего дома",
            text: "В подъезде мусорим только лепестками роз",
            seenCount: 0,
            date: '07.04.19',
            url: "",
            author: "Ваш УК",
            maxLines: 2
        });

        const dataNew7 = new NewsItem({
            id: 4,
            title: "Информация от МУП Водоконал",
            text: "Телефонограмма МУП Водоканал: В связи с производством работ по подключению водопровода Д-100 объекта \"Придорожный автомобильный сервис по ул.Кулахметова\" к водопроводу Д-500мм 05.03.2019 с 09:00 часов и до 03.00 06.03.2019 будет прекращена подача воды в ж.д.: Серова, 3, 5,11,13,15,17,19; Блюхера, 81,82.84.84.85.",
            seenCount: 0,
            date: '01.03.19',
            url: "",
            author: "Ваш УК",
            maxLines: 3
        });
        const dataNew8 = new NewsItem({
            id: 5,
            title: "Добро пожаловать в наш сервис",
            text: "Теперь все услуги ЖКХ вам доступны онлайн",
            seenCount: 0,
            date: '',
            url: "",
            author: "Ваш УК",
            maxLines: 2
        });
        this.data = [dataNew, dataNew2, dataNew3,dataNew4,dataNew5, dataNew6, dataNew7, dataNew7];
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
