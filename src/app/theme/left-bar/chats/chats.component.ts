import { Component, OnInit } from "@angular/core";


@Component({
    selector: "hs-chats",
    moduleId: module.id,
    templateUrl: "./chats.component.html"
})
export class ChatsComponent implements OnInit {
    countries = ["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
        "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy",
        "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia",
        "Slovenia", "Spain", "Sweden", "United Kingdom"];
    constructor() {
    }

    ngOnInit(): void {
        // Init your component properties here.
    }


}
