import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { RouterExtensions } from "nativescript-angular";
import { ServiceService } from "~/app/theme/home/service/shared/service.service";
import { CurrentService } from "~/app/theme/home/service/shared/currentService";
class Country {
    constructor(public name: string) { }
}

@Component({
    selector: "hs-camers",
    moduleId: module.id,
    templateUrl: "./camers.component.html",
    styleUrls: ['./camers.component.scss']
})
export class CamersComponent implements OnInit {

    data = [];
    constructor(private routerExtensions: RouterExtensions,
                private serviceService: ServiceService) {}

    ngOnInit() {

    }

    onOpenVideo(index: number){
        this.routerExtensions.navigate(["home", "camera", index]);
    }

}
