import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ChatsComponent } from "~/app/theme/left-bar/chats/chats.component";

const routes: Routes = [
    { path: "", component: ChatsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ChatsRoutingModule { }
