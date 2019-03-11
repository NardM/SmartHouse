import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HistoryPaymentComponent } from "./history-payment.component";

const routes: Routes = [
    { path: "", component: HistoryPaymentComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HistoryPaymentRoutingModule { }
