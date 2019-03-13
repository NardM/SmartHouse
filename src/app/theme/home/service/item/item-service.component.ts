import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "hs-item-service",
    moduleId: module.id,
    templateUrl: "./item-service.component.html"
})
export class ItemServiceComponent implements OnInit {

    private id: number;
    private subscription: Subscription;
    private defaultItems = [
        {title: 'Вызвать сантехника', id: 1},
        {title: 'Вызвать электрика', id: 2},
        {title: 'Вызвать плотника', id: 3},
        {title: 'Предложить запись', id: 4}
    ];

    public currentItem: {title: string, id: number} = null;

    constructor(private activateRoute: ActivatedRoute,
                private routerExtensions: RouterExtensions) {
        debugger;
        this.subscription = activateRoute.params.subscribe((params: any) => this.id = params['id']);
        this.currentItem = this.defaultItems.filter((item: any) => item.id === this.id)[0];
    }

    ngOnInit(): void {
    }


    goBack(): void {
        this.routerExtensions.back();
    }
}
