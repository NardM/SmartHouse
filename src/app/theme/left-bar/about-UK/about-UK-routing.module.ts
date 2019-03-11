import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AboutUKComponent } from "./about-UK.component";

const routes: Routes = [
    { path: "", component: AboutUKComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AboutUKRoutingModule { }
