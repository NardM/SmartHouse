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

    login(phone: string) {
        return this.tokenService.token()
            .pipe(
                map((token: string) => new HttpHeaders({
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token
                    }),
                    tap((headers) => {
                        this.http.post("http://ukapi.smartapi.ru/api/v1/account/login",
                            JSON.stringify({phone: phone}),
                            {headers: headers})
                            .pipe(map((response: any) => response.json()))
                    })));
    }

    confirm(phone: string, code: string)  {

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
