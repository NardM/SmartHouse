import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { UkApiConnection } from "~/app/genconnection/ukapi.connection";
import { TabView, TabViewItem, SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
import { registerElement } from "nativescript-angular";
import { Observable } from "tns-core-modules/ui/core/bindable";
import { isAndroid } from "tns-core-modules/platform";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    startConnect: UkApiConnection;

    constructor() {
        // Use the component constructor to inject providers.
    //    this.startConnect = new UkApiConnection();
    }

    ngOnInit(): void {

        // Init your component properties here.
    }

    onLoaded(args) {
        const tabView: TabView = <TabView>args.object;
        const vm = new Observable();
        vm.set("tabSelectedIndex", 0);
        vm.set("tabSelectedIndexResult", "Profile Tab (tabSelectedIndex = 0 )");

        tabView.bindingContext = vm;
    }

    getIconSource(icon: string): string {
        const iconPrefix = isAndroid ? "res://" : "res://tabIcons/";

        return iconPrefix + icon;
    }

    changeTab(args) {
        const vm = args.object.bindingContext;
        const tabSelectedIndex = vm.get("tabSelectedIndex");
        if (tabSelectedIndex === 0) {
            vm.set("tabSelectedIndex", 1);
        } else if (tabSelectedIndex === 1) {
            vm.set("tabSelectedIndex", 2);
        } else if (tabSelectedIndex === 2) {
            vm.set("tabSelectedIndex", 0);
        }
    }

    onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
        if (args.oldIndex !== -1) {
            const newIndex = args.newIndex;
            const vm = (<TabView>args.object).bindingContext;
            if (newIndex === 0) {
                vm.set("tabSelectedIndexResult", "Profile Tab (tabSelectedIndex = 0 )");
            } else if (newIndex === 1) {
                vm.set("tabSelectedIndexResult", "Stats Tab (tabSelectedIndex = 1 )");
            } else if (newIndex === 2) {
                vm.set("tabSelectedIndexResult", "Settings Tab (tabSelectedIndex = 2 )");
            }
        }
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
