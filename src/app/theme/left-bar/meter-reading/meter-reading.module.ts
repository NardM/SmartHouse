import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MeterReadingRoutingModule } from "./meter-reading-routing.module";
import { MeterReadingComponent } from "./meter-reading.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MeterReadingRoutingModule
    ],
    declarations: [
        MeterReadingComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MeterReadingModule { }
