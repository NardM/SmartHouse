import { Component, OnInit } from "@angular/core";
import { Button } from "tns-core-modules/ui/button";
import { EventData } from "tns-core-modules/data/observable";
import { RouterExtensions } from "nativescript-angular";
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

    constructor(private routerExtensions: RouterExtensions) {
    }

    ngOnInit(): void {
        // Init your component properties here.
    }


    onTap(args: EventData) {
        const button = <Button>args.object;
     //   this.routerExtensions.navigate(['item']);
    }
}
