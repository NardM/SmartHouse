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
    private _dataItems: ObservableArray<any>;
    private _templateSelector: (item: any, index: number, items: any) => string;

    constructor() {
    }

    get dataItems(): ObservableArray<any> {
        return this._dataItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray();
        this._templateSelector = this.templateSelectorFunction;
        let itemsCount = 50;
        for (let i = 0; i <= itemsCount; i++) {
            this._dataItems.push({name: 1, type: 2, description: 23123});
        }
    }

    private getType(index: number, end: number): string {
        let lastDigit = index % 10;
        let type = index === 0 ? "start" : index === end ? "end" : undefined;
        if (!type) {
            type = lastDigit === 0 ? "default" : lastDigit <= 3 ? "red" : lastDigit <= 6 ? "blue" : lastDigit <= 9 ? "green" : "default";
        }

        return type;
    }

    get templateSelector(): (item: any, index: number, items: any) => string {
        return this._templateSelector;
    }

    set templateSelector(value: (item: any, index: number, items: any) => string) {
        this._templateSelector = value;
    }

    public templateSelectorFunction = (item: any, index: number, items: any) => {
        return item.type;
    }

}
