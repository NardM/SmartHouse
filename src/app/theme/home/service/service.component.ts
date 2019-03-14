import { Component, OnInit } from "@angular/core";
import { Button } from "tns-core-modules/ui/button";
import { EventData } from "tns-core-modules/data/observable";
import { RouterExtensions } from "nativescript-angular";
import { CurrentService, ServiceService } from "~/app/theme/home/service/service.service";
class Country {
    constructor(public name: string) { }
}

@Component({
    selector: "hs-service",
    moduleId: module.id,
    templateUrl: "./service.component.html"
})
export class ServiceComponent implements OnInit {

    items = [
        {title: "Вызвать сантехника", id: 1, submit: "Вызвать специалиста", type: ServiceType.service},
        {title: "Вызвать электрика", id: 2, submit: "Вызвать специалиста", type: ServiceType.service},
        {title: "Вызвать плотника", id: 3, submit: "Вызвать специалиста", type: ServiceType.service},
        {title: "Предложить запись", id: 4, submit: "Отправить", type: ServiceType.message}
    ];

    constructor(private routerExtensions: RouterExtensions,
                private serviceService: ServiceService) {
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onTap(id: number) {
        this.serviceService.setCurrentService(this.items.filter((res: CurrentService) => res.id === id)[0]);
        this.routerExtensions.navigate(["home", "service"]);
    }
}

export enum ServiceType{
    service,
    message
}
