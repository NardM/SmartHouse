import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MeterReadingRoutingModule } from "./meter-reading-routing.module";
import { MeterReadingComponent } from "./meter-reading.component";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { NativeScriptFormsModule } from "nativescript-angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MeterReadingRoutingModule,
        NativeScriptUIDataFormModule,
        NativeScriptFormsModule
    ],
    declarations: [
        MeterReadingComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MeterReadingModule { }
