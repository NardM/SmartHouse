import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MeterReadingComponent } from "./meter-reading.component";

const routes: Routes = [
    { path: "", component: MeterReadingComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MeterReadingRoutingModule { }
