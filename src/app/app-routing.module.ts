import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from "~/app/theme/login/login.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "home", loadChildren: "~/app/theme/home/home.module#HomeModule" },
    { path: "meter-reading", loadChildren: "~/app/theme/left-bar/meter-reading/meter-reading.module#HistoryPaymentModule" },
    { path: "history-payment", loadChildren: "~/app/theme/left-bar/history-payment/history-payment.module#HistoryPaymentModule" },
    { path: "feedback", loadChildren: "~/app/theme/left-bar/feedback/feedback.module#FeedbackModule" },
    { path: "about-uk", loadChildren: "~/app/theme/left-bar/about-uk/about-uk.module#AboutUKModule" },
    { path: "about-app", loadChildren: "~/app/theme/left-bar/about-app/about-app.module#AboutAppModule" },
    { path: "settings", redirectTo: "login" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
