import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    CanLoad, NavigationExtras, Route,
    Router,
    RouterStateSnapshot
} from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "~/app/service/guard/auth.service";
import { StorageService } from "~/app/rest/storage.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(private authService: AuthService,
                private router: Router,
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

        if (this.store.getItem("login_token") !== null &&
            this.store.getItem("login_token") !== "null" &&
            this.store.getItem("login_token") !== undefined) {
            return true;
        }

        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;

        // Create a dummy session id
        const sessionId = 123456789;

        // Set our navigation extras object
        // that contains our global query params and fragment
        const navigationExtras: NavigationExtras = {
            queryParams: {session_id: sessionId},
            fragment: "anchor"
        };

        // Navigate to the login page with extras
        this.router.navigate(["/login"], navigationExtras);

        return false;
    }
}
