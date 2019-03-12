import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
class Country {
    constructor(public name: string) { }
}

@Component({
    selector: "hs-item-new",
    moduleId: module.id,
    templateUrl: "./item-new.component.html"
})
export class ItemNewComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    public countries: Array<Country>;



    public onItemTap(args) {
        console.log("Item Tapped at cell index: " + args.index);
    }
}
