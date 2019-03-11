import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AboutAppRoutingModule } from "./about-app-routing.module";
import { AboutAppComponent } from "./about-app.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AboutAppRoutingModule
    ],
    declarations: [
        AboutAppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AboutAppModule { }
