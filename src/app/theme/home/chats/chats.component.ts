import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { SegmentedBar, SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";


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
    public myItems: Array<SegmentedBarItem>;
    public prop: string = "Item 1";

    constructor(private routerExtensions: RouterExtensions) {
        const chat = new SegmentedBarItem();
        chat.title = "Чат";
        const neigbor = new SegmentedBarItem();
        neigbor.title = "Соседи";
        this.myItems = [chat, neigbor];
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onChatTap(){

    }

    onContactsTap(){

    }

    public onSelectedIndexChange(args) {
        const segmentedBar = <SegmentedBar>args.object;
        this.selectedTabview = segmentedBar.selectedIndex;
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
