import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
    selector: "hs-item-service",
    moduleId: module.id,
    templateUrl: "./item-service.component.html"
})
export class ItemServiceComponent implements OnInit {

    private id: number;
    private subscription: Subscription;

    constructor(private activateRoute: ActivatedRoute) {
        this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
