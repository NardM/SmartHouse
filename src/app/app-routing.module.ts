import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/theme/left-bar/home/home.module#HomeModule" },
    { path: "meter-reading", loadChildren: "~/app/theme/left-bar/meter-reading/meter-reading.module#MeterReadingModule" },
    { path: "history-payment", loadChildren: "~/app/theme/left-bar/history-payment/history-payment.module#HistoryPaymentModule" },
    { path: "feedback", loadChildren: "~/app/theme/left-bar/feedback/feedback.module#FeedbackModule" },
    { path: "about-uk", loadChildren: "~/app/theme/left-bar/about-UK/about-UK.module#AboutUKModule" },
    { path: "about-app", loadChildren: "~/app/theme/left-bar/about-app/about-app.module#AboutAppModule" },
    { path: "settings", redirectTo: "login" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
