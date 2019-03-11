import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HistoryPaymentRoutingModule } from "./history-payment-routing.module";
import { HistoryPaymentComponent } from "./history-payment.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HistoryPaymentRoutingModule
    ],
    declarations: [
        HistoryPaymentComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HistoryPaymentModule { }
