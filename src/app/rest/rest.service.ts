
import { HttpClient } from "@angular/common/http";
import { Response } from "@angular/http";
import { Router } from "@angular/router";
import { Inject, Injector } from "@angular/core";
import { Observable, of, from, throwError } from "rxjs";
import { map, take, flatMap, catchError, mergeMap } from "rxjs/operators";
import { TokenService } from "~/app/rest/token.service";
import { StorageService } from "~/app/rest/storage.service";
import { Answer, ErrorCode, Pager, RestList } from "~/app/rest/model";
// import { environment } from "~/environments/environment";
// import { invalid } from "moment";

export const environment = {
    production: false,
    apiUrl: "http://example.com/api/",
    host_url: "http://ukapi.smartapi.ru"
};

export class BaseService {
    // tslint:disable-next-line:variable-name
    protected host_url: string;
    protected _tokenService: TokenService;
    protected store: StorageService;
    private http: HttpClient;
    private _router: Router;

    constructor(private inject: Injector) {
        this.host_url = environment.host_url;
        this._tokenService = inject.get(TokenService);
        this._router = inject.get(Router);
        this.http = inject.get(HttpClient);
        this.store = inject.get(StorageService);
    }

    protected enumFilterValue<T>(ar: Array<T>): number {
        let value = 0;
        for (const item of ar) {
            value |= 1 << +item;
        }

        return value;
    }

    protected response<T>(request: () => Observable<Answer<T>>): Observable<T> {

        const httpRequest = request();
        const obin: ((o: Answer<T>) => Observable<T>) = (res: Answer<T>) => {
            if (res.success) {
                const obj = this.parseData<T>(res.data) as T;

                return of(obj);
            } else {
                const code = res.message.code as ErrorCode;
                switch (code) {
                    case ErrorCode.AccessError:
                        const device_token = this.store.getItem("device_token");
                        const access_token = this.store.getItem("access_token");
                        if (device_token == null && access_token != null) {
                            return this._tokenService.refreshAccountToken().pipe(flatMap((a) => {
                                if (a.success) {
                                    this.store.setItem("access_token", a.data.access_token);

                                    return this.response<T>(request);
                                } else {
                                    this._router.navigate([]);

                                    return throwError(a.message);
                                }
                            }));
                        } else if (device_token != null && access_token == null) {
                            return this._tokenService.refreshDeviceToken().pipe(flatMap((a) => {
                                if (a.success) {
                                    this.store.setItem("device_token", a.data.access_token);
                                } else {
                                    this.store.setItem("device_token", null);
                                }

                                return this.response<T>(request);
                            }));
                        } else if (device_token == null && access_token == null) {
                            return this._tokenService.initDeviceToken().pipe(flatMap((a) => {
                                if (a.success) {
                                    this.store.setItem("device_token", a.data.access_token);

                                    return this.response<T>(request);
                                } else {
                                    return throwError(a.message);
                                }
                            }));
                        }
                        break;
                    case ErrorCode.NotFound:
                        // this._alertService.create('warning', res.message.message);
                        break;
                }
            }

            return throwError(res.message);
        };

        return httpRequest.pipe(flatMap(obin));
    }

    protected getCollectionCanck<T>(url: string, pager: Pager): Observable<RestList<T>> {
        let newUrl = url;
        if (url.indexOf("?") === -1) {
            newUrl += "?";
        } else {
            newUrl += "&";
        }
        const count = pager.count;
        const offset = pager.offset;
        newUrl += `count=${count}&offset=${offset}`;

        return this.response(() => this.http.get<Answer<RestList<T>>>(newUrl));
    }

    protected getCollectionWithInstance<T>(type: { new(): T }, url: string): Observable<RestList<T>> {
        return this.response(() => this.http.get<Answer<RestList<T>>>(url))
            .pipe(map((a) => new RestList<T>(a, type)));
    }

    protected getWithInstance<T>(type: { new(): T }, url: string): Observable<T> {
        return this.response(() => this.http.get<Answer<T>>(url))
            .pipe(map((a) => {
                const out = new type();

                return this.parseDataTo(out, a) as T;
            }));
    }

    protected getCollection<T>(url: string): Observable<RestList<T>> {
        return this.response(() => this.http.get<Answer<RestList<T>>>(url));
    }

    protected get<T>(url: string): Observable<T> {
        return this.response(() => this.http.get<Answer<T>>(url));
    }

    protected post<T>(url: string, param?: any): Observable<T> {
        const requestModel = this.toRequestmodel(param);

        return this.response<T>(() => this.http.post<Answer<T>>(url, requestModel));
    }

    protected put<T>(url: string, param?: any): Observable<T> {
        return this.response(() => this.http.put<Answer<T>>(url, param));
    }

    protected delete<T>(url: string): Observable<T> {
        return this.response(() => this.http.delete<Answer<T>>(url));
    }

    private toRequestmodel(model: any): any {
        const request = {};
        // tslint:disable-next-line:forin
        for (const key in model) {
            const value = model[key];
            if (Array.isArray(value)) {
                const newArray = [];
                for (let i = 0; i < value.length; i++) {
                    newArray[i] = this.toRequestmodel(value[i]);
                }
                request[key] = newArray;
            } else {
                if (value instanceof Date) {

                    request[key] = value.getTime() - (value.getTimezoneOffset() * 60 * 1000);

                } else {
                    if (typeof value === "object") {
                        request[key] = this.toRequestmodel(value);
                    } else {
                        request[key] = value;
                    }

                }

            }
        }

        return request;

    }

    private parseData<T>(inValue: any): T {
        const out = {};

        return this.parseDataTo(out, inValue) as T;

    }

    private parseDataTo<T>(out: T, inValue: any): T {
        // tslint:disable-next-line:forin
        for (const key in inValue) {
            const value = inValue[key];
            if (key.includes("_date") || key.includes("date_") || key === "date" || key.includes("last_modif")) {
                if (typeof value === "number") {
                    const newDateValue = value + (new Date().getTimezoneOffset() * 60 * 1000);

                    out[key] = new Date(newDateValue);
                } else {
                    if (value != null) {
                        if (typeof (value) === "object") {
                            out[key] = this.parseData(value);
                        } else {
                            out[key] = value;
                        }
                    }

                }
            } else {
                out[key] = value;
            }
        }

        return out as T;
    }
}
