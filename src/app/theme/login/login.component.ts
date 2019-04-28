import { Component, ElementRef, Injector, OnInit, ViewChild } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular";
import { User } from "~/app/model/user.model";
import { UserService } from "~/app/service/user.service";
import { LoginService } from "~/app/service/login.service";
import { AccountService } from "~/app/genservices/account.service";
import { LoginWithconfirm } from "~/app/genmodel/login_withconfirm";
import { ConfirmPhoneModel } from "~/app/genmodel/confirm_phone.model";
import { LoginResult } from "~/app/genmodel/login_result";
import { TokenService } from "~/app/rest/token.service";

@Component({
    selector: "hs-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent {

    isLoggingIn = true;
    user: User;
    processing = false;
    @ViewChild("password") password: ElementRef;
    @ViewChild("confirmPassword") confirmPassword: ElementRef;
    loginWithconfirm: LoginWithconfirm;
    confirmPhoneModel: ConfirmPhoneModel;
    loginService: AccountService;

    constructor(private page: Page,
                private injector: Injector,
                private tokenService: TokenService,

                // private loginService: AccountService,
                private routerExtensions: RouterExtensions) {
        this.loginService = new AccountService(injector);
        this.page.actionBarHidden = true;
        this.user = new User();
        this.loginWithconfirm = {
            phone: "+7"
        };
        this.confirmPhoneModel = {
            code: "",
            phone: null
        };
        this.tokenService.initDevice();
    }

    toggleForm() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    checkPhone(): boolean {
        if (!this.loginWithconfirm.phone) {
            return false;
        }
        const regexPhone = /^((\+7)+([0-9]){10})$/;

        return !!this.loginWithconfirm.phone.match(regexPhone);
    }

    submit() {
        if (!this.checkPhone()) {
            return;
        }
        this.processing = true;

        this.loginService.loginWithConfirm(this.loginWithconfirm)
            .subscribe((result: LoginResult) => {
                this.isLoggingIn = false;
                this.processing = false;
                this.confirmPhoneModel.code = result.code;
            });

    }

    login() {
        this.confirmPhoneModel.phone = this.loginWithconfirm.phone;
        this.loginService.confirm(this.confirmPhoneModel)
            .subscribe(() => {
                this.routerExtensions.navigate(["/home"], {clearHistory: true});
            });
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }

    focusConfirmPassword() {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    }

}
