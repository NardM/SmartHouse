
import { Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { DeviceDataModel, DeviceModel } from "./models";
import { Observable, of, from, throwError } from "rxjs";
import { map, take, flatMap, catchError } from "rxjs/operators";
import { StorageService } from "./storage.service";
import { Answer } from "src/app/rest/model";
// import { environment } from "~/environments/environment";
export const environment = {
    production: false,
    apiUrl: "http://example.com/api/",
    host_url: "http://ukapi.smartapi.ru"
};
@Injectable()
export class TokenService {

    private host_url: string;
    private http: HttpClient;
    private store: StorageService;
    private _route: Router;
    constructor(private injector: Injector) {
        this.host_url = environment.host_url;
        this.http = injector.get(HttpClient);
        this._route = injector.get(Router);
        this.store = injector.get(StorageService);
    }

    getDeviceData(): DeviceDataModel {

        return {
            device_id: this.generateGuid(),
            os_version: "web",
            app_version: "1.0.0",
            app_type: 1,
            device_type: 1,
            app_build: 1
        } as DeviceDataModel;
    }

    initDevice() {
        if (this.store.getItem("device_token") === null) {
            this.initDeviceToken().subscribe((answer) => {
                if (answer.success) {
                    const a = answer.data;
                    this.store.setItem("device_token", a.access_token);
                    this.store.setItem("access_token_hash", a.access_token_hash);
                    this.store.setItem("token_type", a.token_type);
                    this.store.setItem("expires_in", a.expires_in.toString());
                    this.store.setItem("api_host", a.api_host);
                    this.store.setItem("date", a.date.toString());
                    this.store.setItem("need_sync", String(a.need_sync));
                }
            });
        }
    }
    initDeviceToken(): Observable<Answer<DeviceModel>> {
        return this.initDeviceTokenMethod(this.getDeviceData());
    }
    refreshDeviceToken(): Observable<Answer<DeviceModel>> {
        const url = `${this.host_url}/api/v1/device/token/refresh`;

        return this.http.post<Answer<DeviceModel>>(url, this.getDeviceData());
    }
    refreshAccountToken(): Observable<Answer<DeviceModel>> {
        return this.refreshAccountMethod(this.getDeviceData());
    }

    logout(): Observable<boolean> {
        const url = `${this.host_url}/api/v1/account/logout`;

        return this.http.post<Answer<DeviceModel>>(url, this.getDeviceData()).pipe(flatMap((a) => {
            if (a.success) {
                this.store.setItem("device_token", a.data.access_token);
            } else {
                this.store.setItem("device_token", null);
            }
            this.store.setItem("access_token", null);

            return of(true);
        }));
    }

    private initDeviceTokenMethod(deviceData: DeviceDataModel): Observable<Answer<DeviceModel>> {
        const url = `${this.host_url}/api/v1/device`;

        return this.http.post<Answer<DeviceModel>>(url, deviceData);
    }

    private refreshAccountMethod(deviceData: DeviceDataModel): Observable<Answer<DeviceModel>> {
        const url = `${this.host_url}/api/v1/account/token/refresh`;

        return this.http.post<Answer<DeviceModel>>(url, deviceData);
    }

    private generateGuid(): string {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
    }
}
