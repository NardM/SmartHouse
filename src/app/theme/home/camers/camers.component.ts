import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ObservableArray } from "tns-core-modules/data/observable-array";
class Country {
    constructor(public name: string) { }
}

@Component({
    selector: "hs-camers",
    moduleId: module.id,
    templateUrl: "./camers.component.html"
})
export class CamersComponent implements OnInit {


    ngOnInit() {

    }



}
