import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular";
import { User } from "~/app/model/user.model";
import { UserService } from "~/app/service/user.service";
import { LoginService } from "~/app/service/login.service";

@Component({
    selector: "hs-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent  {

    isLoggingIn = true;
    user: User;
    processing = false;
    @ViewChild("password") password: ElementRef;
    @ViewChild("confirmPassword") confirmPassword: ElementRef;

    constructor(private page: Page,
                private loginService: LoginService,
                private routerExtensions: RouterExtensions) {
        this.page.actionBarHidden = true;
        this.user = new User();
        this.user.phone = "+7";
        this.user.code = "";
    }

    toggleForm() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    checkPhone(): boolean {
        if (!this.user.phone) {
            return false;
        }
        const regexPhone = /^((\+7)+([0-9]){10})$/;
        return !!this.user.phone.match(regexPhone);
    }

    submit() {
        if (!this.checkPhone()) {
            this.alert("Пожалуйста, введите корректный номер телефона");
            return;
        }
        this.processing = true;

        this.loginService.login(this.user.phone)
            .subscribe((result) => {
                this.isLoggingIn = false;
                this.processing = false;
                this.user.code = result.data.code;
            });

    }

    login() {
        this.loginService.confirm(this.user.phone, this.user.code)
            .subscribe(() => {
                this.routerExtensions.navigate(["/home"], { clearHistory: true });
            });
    }

    register() {

       /* this.userService.register(this.user)
            .then(() => {
                this.processing = false;
                this.alert("Your account was successfully created.");
                this.isLoggingIn = true;
            })
            .catch(() => {
                this.processing = false;
                this.alert("Unfortunately we were unable to create your account.");
            });*/
    }

    forgotPassword() {

    }

    focusPassword() {
        this.password.nativeElement.focus();
    }
    focusConfirmPassword() {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    }

    alert(message: string) {
        return alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    }


}
