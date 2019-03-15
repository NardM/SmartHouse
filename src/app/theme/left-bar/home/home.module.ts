import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NewsComponent } from "~/app/theme/home/news/news.component";
import { ServiceComponent } from "~/app/theme/home/service/service.component";
import { ItemServiceComponent } from "~/app/theme/home/service/item/item-service.component";
import { CamersComponent } from "~/app/theme/home/camers/camers.component";
import { ItemCameraComponent } from "~/app/theme/home/camers/item/item-camera.component";
import { ServiceService } from "~/app/theme/home/service/shared/service.service";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";



@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        NativeScriptUIDataFormModule
    ],
    declarations: [
        HomeComponent,
        NewsComponent,
        ServiceComponent,
        ItemServiceComponent,
        CamersComponent,
        ItemCameraComponent
    ],
    providers: [
        ServiceService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
