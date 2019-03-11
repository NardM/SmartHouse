import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AboutUKRoutingModule } from "./about-UK-routing.module";
import { AboutUKComponent } from "./about-UK.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AboutUKRoutingModule
    ],
    declarations: [
        AboutUKComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AboutUKModule { }
