import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";


@Component({
    selector: "hs-chats",
    moduleId: module.id,
    templateUrl: "./chats.component.html",
    styleUrls: ["./chats.component.scss"]

})
export class ChatsComponent implements OnInit {

    lastDelY = 0;
    headerCollapsed = false;
    selectedTab = 0;
    selectedTabview = 0;
    items: Array<any>;
    categories: Array<any>;

    constructor(private routerExtensions: RouterExtensions) {
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onChatTap(){

    }

    onContactsTap(){

    }

    showItem(itemId) {
        console.log(`Tapped on ${itemId}`);
        this.routerExtensions.navigate(["detail/" + itemId, {
            animated: true,
            transition: {
                name: "slideTop",
                duration: 380,
                curve: "easeIn"
            }
        }]);
    }

}
