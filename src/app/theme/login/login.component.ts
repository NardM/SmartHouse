import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular";
import { User } from "~/app/model/user.model";
import { UserService } from "~/app/service/user.service";

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
                private userService: UserService,
                private routerExtensions: RouterExtensions) {
        this.page.actionBarHidden = true;
        this.user = new User();
        this.user.email = "user@nativescript.org";
        this.user.password = "password";
    }

    toggleForm() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    submit() {
        if (!this.user.email || !this.user.password) {
            this.alert("Please provide both an email address and password.");
            return;
        }

        this.processing = true;
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.register();
        }
    }

    login() {
      /*  this.userService.login(this.user)
            .then(() => {
                this.processing = false;
                this.routerExtensions.navigate(["/home"], { clearHistory: true });
            })
            .catch(() => {
                this.processing = false;
                this.alert("Unfortunately we could not find your account.");
            });*/
    }

    register() {
        if (this.user.password !== this.user.confirmPassword) {
            this.alert("Your passwords do not match.");
            return;
        }
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
