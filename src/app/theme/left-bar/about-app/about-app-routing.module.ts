import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AboutAppComponent } from "./about-app.component";

const routes: Routes = [
    { path: "", component: AboutAppComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AboutAppRoutingModule { }
