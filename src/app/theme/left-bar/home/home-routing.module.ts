import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { ItemServiceComponent } from "~/app/theme/home/service/item/item-service.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "item/:id", component: ItemServiceComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
