import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ListView } from "tns-core-modules/ui/list-view";
import { TextField } from "tns-core-modules/ui/text-field";
import { Observable } from "rxjs";
class Country {
    constructor(public name: string) { }
}

@Component({
    selector: "hs-chat",
    moduleId: module.id,
    styleUrls: ["./chat.component.scss"],
    templateUrl: "./chat.component.html"
})
export class ChatComponent implements OnInit, AfterViewInit {

    me: string;

    @ViewChild("list") lv: ElementRef;
    @ViewChild("textfield") tf: ElementRef;

    list: ListView;
    textfield: TextField;

    chats$: Observable<any>;

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.list = this.lv.nativeElement;
        this.textfield = this.tf.nativeElement;
    }

    scroll(count: number) {
        console.log("scrolling to ", count);
        this.list.scrollToIndex(count - 1);
        this.list.refresh();
    }

    chat(message: string) {
        this.textfield.text = "";
    }

    filter(sender) {
        if (sender === '') {
            return "me";
        } else {
            return "them";
        }
    }

    align(sender) {
        if (sender === '') {
            return "right";
        } else {
            return "left";
        }
    }
    showImage(sender) {
        if (sender === '') {
            return "collapsed";
        } else {
            return "visible";
        }
    }
}
