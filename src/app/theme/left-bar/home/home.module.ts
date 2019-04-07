import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NewsComponent } from "~/app/theme/home/news/news.component";
import { ServiceComponent } from "~/app/theme/home/service/service.component";
import { ItemServiceComponent } from "~/app/theme/home/service/item/item-service.component";
import { CamersComponent } from "~/app/theme/home/camers/camers.component";
import { ItemCameraComponent } from "~/app/theme/home/camers/item/item-camera.component";
import { ServiceService } from "~/app/theme/home/service/shared/service.service";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { ChatsComponent } from "~/app/theme/home/chats/chats.component";
import { ListContactsComponent } from "~/app/theme/home/chats/list-constacts/list-constacts.component";
import { ListChatsComponent } from "~/app/theme/home/chats/list-chat/list-chat.component";
import { ChatComponent } from "~/app/theme/home/chats/chat/chat.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        NativeScriptUIDataFormModule
    ],
    declarations: [
        HomeComponent,
        NewsComponent,
        ServiceComponent,
        ItemServiceComponent,
        CamersComponent,
        ItemCameraComponent,
        ChatsComponent,
        ListContactsComponent,
        ListChatsComponent,
        ChatComponent
    ],
    providers: [
        ServiceService,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
