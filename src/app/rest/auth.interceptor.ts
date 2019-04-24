import { StorageService } from "./storage.service";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observer, Observable } from "rxjs";
import { Injector, Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private store: StorageService;
    constructor(private injector: Injector) {
        this.store = injector.get(StorageService);
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const access_token = this.store.getItem("access_token");
        const device_token = this.store.getItem("device_token");
        const token = access_token == null ? device_token : access_token;
        if (token != null) {
            const clonedRequest = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + token)
            });

            return next.handle(clonedRequest);
        } else {
            return next.handle(req);
        }
    }
}
