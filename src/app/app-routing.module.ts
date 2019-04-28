import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from "~/app/theme/login/login.component";
import { AuthGuard } from "~/app/service/guard/auth-guard.service";
import { AuthGuardLogin } from "~/app/service/guard/login-guard.service";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
        canActivate: [AuthGuard]
    },
    {
        path: "home",
        loadChildren: "~/app/theme/left-bar/home/home.module#HomeModule",
        canActivate: [AuthGuard]
    },
    {
        path: "meter-reading",
        loadChildren: "~/app/theme/left-bar/meter-reading/meter-reading.module#MeterReadingModule",
        canActivate: [AuthGuard]
    },
    {
        path: "account",
        loadChildren: "~/app/theme/left-bar/account/account.module#AccountModule",
        canActivate: [AuthGuard]
    },
    {
        path: "history-payment",
        loadChildren: "~/app/theme/left-bar/history-payment/history-payment.module#HistoryPaymentModule",
        canActivate: [AuthGuard]
    },
    {
        path: "feedback",
        loadChildren: "~/app/theme/left-bar/feedback/feedback.module#FeedbackModule",
        canActivate: [AuthGuard]
    },
    {
        path: "about-uk",
        loadChildren: "~/app/theme/left-bar/about-UK/about-UK.module#AccountModule",
        canActivate: [AuthGuard]
    },
    {
        path: "about-app",
        loadChildren: "~/app/theme/left-bar/about-app/about-app.module#AboutAppModule",
        canActivate: [AuthGuard]
    },
    {
        path: "login", component: LoginComponent, canActivate: [AuthGuardLogin]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
