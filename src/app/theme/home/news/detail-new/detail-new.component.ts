import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NewsItem } from "~/app/model/news.model";
import { CurrentNewService } from "~/app/theme/home/news/shared/current-new.service";
import { RouterExtensions } from "nativescript-angular";
import { TextField } from "tns-core-modules/ui/text-field";
import { Message } from "nativescript-plugin-firebase";
import { TextView } from "tns-core-modules/ui/text-view";
import { ListView } from "tns-core-modules/ui/list-view";
import { User } from "~/app/model/user.model";
import * as moment from 'moment';

@Component({
    selector: "hs-item-detail-new",
    moduleId: module.id,
    templateUrl: "./detail-new.component.html",
    styleUrls: ["./detail-new.component.scss"]
})
export class DetailNewComponent implements OnInit {

    private get chatBox(): ListView {
        return this.chatBoxRef.nativeElement;
    }

    private get newMessage(): TextView {
        return this.newMessageRef.nativeElement;
    }

    itemNews: NewsItem;
    show: boolean = false;
    textfield: TextField;

    me: User;
    other: User;
    messages: Array<any> = [];

    @ViewChild("chatBox") chatBoxRef: ElementRef;

    @ViewChild("newMessage") newMessageRef: ElementRef;

    constructor(private newsService: CurrentNewService,
                private routerExtensions: RouterExtensions) {
        this.itemNews = this.newsService.currentItem;
        if (this.itemNews.id === 2) {
            const item = {
                url: 'https://www.technouz.com/wp-content/uploads/2017/11/angular-logo.png',
                name: 'Анна Алексеева',
                date: '18.08.2019 20:40',
                message: 'Пятнистая-серая? Если да, то это моя'
            };
            this.messages.push(item);
        }
    }

    ngOnInit(): void {
    }

    chat(message: string) {
        this.textfield.text = "";
    }

    onSend(message: any): void {
        console.log(message);
        this.textfield.text = "";
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    goBack(): void {
        this.routerExtensions.back();
    }

    sendMessage(): void {
        const content = this.newMessage.text;
        if (content === "") {
            return;
        }
        const message = {
            url: 'https://www.bravesoft.co.jp/blog/wp-content/uploads/2018/03/b92c5117cf6d170f57306244095dc314.png',
            name: 'Тест Тестовый',
            date: moment().format('DD.MM.YYYY HH:mm'),
            message: content
        };
        this.messages.push(message);
        this.itemNews.seenCount = this.messages.length;
        this.scrollChatToBottom();
        this.dismissKeyBoard();
    }

    scrollChatToBottom(): void {
        setTimeout(() => {
            this.chatBox.scrollToIndex(this.messages.length - 1);
        }, 0);
    }

    private dismissKeyBoard(): void {
        this.newMessage.text = "";
        this.chatBox.focus();
    }


}
