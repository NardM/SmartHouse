import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "meter-reading", loadChildren: "~/app/meter-reading/meter-reading.module#HistoryPaymentModule" },
    { path: "history-payment", loadChildren: "~/app/history-payment/history-payment.module#HistoryPaymentModule" },
    { path: "feedback", loadChildren: "~/app/feedback/feedback.module#FeedbackModule" },
    { path: "about-uk", loadChildren: "~/app/about-uk/about-uk.module#AboutUKModule" },
    { path: "about-app", loadChildren: "~/app/about-app/about-app.module#AboutAppModule" },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
