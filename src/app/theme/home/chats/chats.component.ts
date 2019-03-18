import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ListView } from "tns-core-modules/ui/list-view";
import { TextField } from "tns-core-modules/ui/text-field";
import { Observable } from "rxjs";
import { BackendService } from "~/app/service/backend.service";
import { FirebaseService } from "~/app/service/firebase.service";
class Country {
    constructor(public name: string) { }
}

@Component({
    selector: "hs-chats",
    moduleId: module.id,
    styleUrls: ["./chats.component.scss"],
    templateUrl: "./chats.component.html"
})
export class ChatsComponent implements OnInit, AfterViewInit {

    me: string;

    @ViewChild("list") lv: ElementRef;
    @ViewChild("textfield") tf: ElementRef;

    list: ListView;
    textfield: TextField;

    chats$: Observable<any>;

    constructor(private firebaseService: FirebaseService) { }

    ngOnInit() {
        this.me = BackendService.token;
        this.chats$ = <any>this.firebaseService.getChats();
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
        this.firebaseService.chat(message).then((data: any) => {
            const count = this.list.items.length;
            this.scroll(count);
        });
        this.textfield.text = "";
    }

    filter(sender) {
        if (sender === BackendService.token) {
            return "me";
        } else {
            return "them";
        }
    }

    align(sender) {
        if (sender === BackendService.token) {
            return "right";
        } else {
            return "left";
        }
    }
    showImage(sender) {
        if (sender === BackendService.token) {
            return "collapsed";
        } else {
            return "visible";
        }
    }
}
