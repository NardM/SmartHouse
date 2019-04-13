import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenService } from "~/app/service/token.service";
import { map, tap } from "rxjs/operators";
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";
import { Observable, Observer } from "rxjs";
import * as appSettings from "tns-core-modules/application-settings";

export interface Logout{
    device_id: string;
    app_type: string;
}

@Injectable()
export class LoginService {

    constructor(private   http: HttpClient,
                private  tokenService: TokenService) {
    }

    test(){
        let options = this.createRequestOptions();
        return this.http.post("http://ukapi.smartapi.ru/api/v1/device", {}, { headers: options });
    }

    private createRequestOptions() {
        let headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        return headers;
    }

    login(phone: string): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            return this.tokenService.token()
                .subscribe(
                    (token: string) => {
                        const header = new HttpHeaders({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + token
                        });
                        this.http.post("http://ukapi.smartapi.ru/api/v1/account/login",
                            JSON.stringify({phone: phone}),
                            {headers: header})
                            .subscribe((response: any) => observer.next(response));
                    });
        });
    }

    confirm(phone: string, code: string): Observable<any>  {
        return Observable.create((observer: Observer<any>) => {
            return this.tokenService.token()
                .subscribe(
                    (token: string) => {
                        const header = new HttpHeaders({
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + token
                        });
                        this.http.post("http://ukapi.smartapi.ru/api/v1/account/confirm",
                            JSON.stringify({phone: phone, code: code}),
                            {headers: header})
                            .subscribe((response: any) => {
                                if (response.success) {
                                    this.tokenService.saveLoginToken(response.data.access_token);
                                }
                                observer.next(response);
                            });
                    });
        });
    }


    private static handleError(error: any) {

    }
}
 class LoginModel{
    constructor(public phone: String){}
}

 class ConfirmModel{
    constructor(
        private  phone: String,
        private code: String
    ){}
}
