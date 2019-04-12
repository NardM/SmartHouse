import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptFormsModule } from "nativescript-angular";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { LoginComponent } from "~/app/theme/login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { LoginService } from "~/app/service/login.service";
import { TokenService } from "~/app/service/token.service";

@NgModule({
    bootstrap: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        LoginService,
        TokenService
    ]
})
export class AppModule { }
