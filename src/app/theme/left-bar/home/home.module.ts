import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NewsComponent } from "~/app/theme/home/news/news.component";
import { ServiceComponent } from "~/app/theme/home/service/service.component";
import { ItemServiceComponent } from "~/app/theme/home/service/item/item-service.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        NewsComponent,
        ServiceComponent,
        ItemServiceComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
