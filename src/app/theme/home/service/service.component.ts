import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Button } from "tns-core-modules/ui/button";
import { EventData } from "tns-core-modules/data/observable";
import { Router } from "@angular/router";
class Country {
    constructor(public name: string) { }
}


@Component({
    selector: "hs-service",
    moduleId: module.id,
    templateUrl: "./service.component.html"
})
export class ServiceComponent implements OnInit {

    public items = [
        {title: 'Вызвать сантехника', id: 1},
        {title: 'Вызвать электрика', id: 2},
        {title: 'Вызвать плотника', id: 3},
        {title: 'Предложить запись', id: 4}
        ];

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onTap(args: EventData) {
        const button = <Button>args.object;
        this.router.navigate(['item', 1])
    }
}
