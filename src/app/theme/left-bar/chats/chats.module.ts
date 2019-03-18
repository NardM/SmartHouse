import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ChatsRoutingModule } from "~/app/theme/left-bar/chats/chats-routing.module";
import { ChatsComponent } from "~/app/theme/left-bar/chats/chats.component";
import { ListContactsComponent } from "~/app/theme/left-bar/chats/list-constacts/list-constacts.component";
import { ListChatsComponent } from "~/app/theme/left-bar/chats/list-chat/list-chat.component";
import { ChatComponent } from "~/app/theme/left-bar/chats/chat/chat.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ChatsRoutingModule
    ],
    declarations: [
        ChatsComponent,
        ListContactsComponent,
        ListChatsComponent,
        ChatComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ChatsModule { }
