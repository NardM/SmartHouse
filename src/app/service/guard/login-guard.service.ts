import { StorageService } from "~/app/rest/storage.service";
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    CanLoad, Route
} from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuardLogin implements CanActivate, CanActivateChild, CanLoad {
    constructor(private router: Router,
                private store: StorageService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;

        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    canLoad(route: Route): boolean {
        const url = `/${route.path}`;

        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        if (this.store.getItem("login_token") === null ||
            this.store.getItem("login_token") === "null" ||
            this.store.getItem("login_token") === undefined) {
            return true;
        }

        // Store the attempted URL for redirecting

        // Create a dummy session id

        // Navigate to the login page with extras
        this.router.navigate(["/home"]);

        return false;
    }

}
