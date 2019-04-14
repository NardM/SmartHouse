import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { ItemServiceComponent } from "~/app/theme/home/service/item/item-service.component";
import { DetailNewComponent } from "~/app/theme/home/news/detail-new/detail-new.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "detail-news", component: DetailNewComponent },
    { path: "service", component: ItemServiceComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
