import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { UkApiConnection } from "~/app/genconnection/ukapi.connection";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    startConnect: UkApiConnection;

    constructor() {
        // Use the component constructor to inject providers.
    //    this.startConnect = new UkApiConnection();
    }

    ngOnInit(): void {

        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
