import { Component, Injector, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { AccountService } from "~/app/genservices/account.service";
import { AccountModel } from "~/app/genmodel/account.model";

@Component({
    selector: "Account",
    moduleId: module.id,
    templateUrl: "./account.component.html"
})
export class AccountComponent implements OnInit {

    data: AccountModel;
    accountService: AccountService;

    constructor(private injector: Injector) {
        this.accountService = new AccountService(injector);
        this.data = new AccountModel();
        this.data.default();
    }

    ngOnInit(): void {

      /*  this.accountService.getAccountInfo()
            .subscribe((account: any) => {
                this.data = new AccountModel(account);
            });*/
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
