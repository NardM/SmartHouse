import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";
import { Injectable } from "@angular/core";
import * as appSettings from "tns-core-modules/application-settings";
import { Observable, of } from "rxjs";
import { GUID } from "~/app/service/GUID";
import Token = DeviceToken.Token;

@Injectable()
export class TokenService {

    private loginToken: string;
    private deviceToken: string;
    private static deviceIdKey: string = 'device_id';


    constructor() {
    }

    public token(): Observable<string> {
        this.loginToken = appSettings.getString("login_token");
        this.deviceToken = appSettings.getString("deviec_token");
        if (this.loginToken !== null && this.loginToken !== "null" && this.loginToken !== undefined) {
            return of(this.loginToken);
        }
        if (this.deviceToken !== null && this.deviceToken !== "null" && this.deviceToken !== undefined) {
            return of(this.deviceToken);
        }
        let deviceId: string = appSettings.getString(TokenService.deviceIdKey);
        if (deviceId == null) {
            deviceId = GUID.getNewGUIDString().toString();
            appSettings.setString('device_id', deviceId);
        }
        let params = {
            'device_id': deviceId,
            'device_type': '3',
            'os_version': 'android',
            'app_version': '1.0.1',
            'app_type': '1',
            'app_build': 1
        };

        request({
            url: "http://ukapi.smartapi.ru/api/v1/device",
            method: "POST",
            headers: { "Content-Type": "application/json" }
        }).then((response) => {
            const result = response.content.toJSON() as Token;
        }, (e) => {
        });
    }


    public refreshToken() {

    }

    saveLoginToken(token: String, expires_in: number) {

    }

    private static handleError(error: any) {

    }
}

export module DeviceToken {

    export interface Data {
        access_token: string;
        access_token_hash: string;
        token_type: string;
        expires_in: number;
        api_host: string;
        date: number;
        need_sync: boolean;
    }

    export interface Token {
        success: boolean;
        data: Data;
    }

}
