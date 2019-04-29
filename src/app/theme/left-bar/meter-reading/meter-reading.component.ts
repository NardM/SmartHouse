import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { IPropertyAnnotation } from "~/app/theme/home/service/shared/service.model";

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./meter-reading.component.html",
    styleUrls: ["./meter-reading.component.scss"]
})
export class MeterReadingComponent implements OnInit {

    metadata: any;
    store: any;

    constructor() {
        // Use the component constructor to inject providers.

        this.metadata = {
            commitMode: "immediate",
            isReadOnly: false,
            validationMode: "immediate",
            propertyAnnotations: [{
                name: "text1",
                displayName: "Электроснобжение день",
                index: 1,
                editor: "Number"
            }, {
                name: "text2",
                displayName: "Электроснобжение ночь",
                index: 2,
                editor: "Number"
            }, {
                name: "text3",
                displayName: "Горячее водоснабжение",
                index: 3,
                editor: "Number"
            }, {
                name: "text4",
                displayName: "Холодное водоснабжение",
                index: 4,
                editor: "Number"
            }
            ]
        };
        this.store = {text1: "", text2: "", text3: "", text4: ""};
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onSubmit() {
        alert({
            title: "Внимание",
            message: "Сдача показаний доступна с 12 по 15 число"
        });
    }
}
