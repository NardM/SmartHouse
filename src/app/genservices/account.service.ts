import { AccountBaseModel } from "~/app/genmodel/account_base.model";
import { AccountModel } from "~/app/genmodel/account.model";
import { Observable } from "rxjs";
import { Injector } from "@angular/core";
import { BaseService } from "~/app/rest/rest.service";
import { RegisterDeviceBindingModel } from "~/app/genmodel/register_device_binding.model";
import { LoginAccessToken } from "~/app/genmodel/login_access_token";
import { LoginWithconfirm } from "~/app/genmodel/login_withconfirm";
import { LoginResult } from "~/app/genmodel/login_result";
import { ConfirmPhoneModel } from "~/app/genmodel/confirm_phone.model";
import { EmptyAnswer } from "~/app/rest/model";
import { DeviceAccessToken } from "~/app/genmodel/device_access_token";
import { ProfileModel } from "~/app/genmodel/profile.model";

export class AccountService extends BaseService {
    constructor(inject: Injector) {
        super(inject);
    }

    getAccountInfo(): Observable<AccountModel> {
        const url = `${this.host_url}/api/v1/account`;

        return this.get<AccountModel>(url);
    }

    updateAccountInfo(model: AccountBaseModel): Observable<AccountModel> {
        const url = `${this.host_url}/api/v1/account`;

        return this.put<AccountModel>(url, model);
    }

    refreshToken(model: RegisterDeviceBindingModel): Observable<LoginAccessToken> {
        const url = `${this.host_url}/api/v1/account/token/refresh`;

        return this.put<LoginAccessToken>(url, model);
    }

    loginWithConfirm(model: LoginWithconfirm): Observable<LoginResult> {
        const url = `${this.host_url}/api/v1/account/login`;

        return this.post<LoginResult>(url, model);
    }

    confirm(model: ConfirmPhoneModel): Observable<LoginAccessToken> {
        const url = `${this.host_url}/api/v1/account/confirm`;

        return this.post<LoginAccessToken>(url, model);
    }

    resendConfirmCode(): Observable<EmptyAnswer> {
        const url = `${this.host_url}/api/v1/account/confirm/code`;

        return this.post<EmptyAnswer>(url);
    }

    confirmToPhone(phone: string): Observable<EmptyAnswer> {
        const url = `${this.host_url}/api/v1/confirm/${phone}$)}`;

        return this.get<EmptyAnswer>(url);
    }

    logout(): Observable<DeviceAccessToken> {
        const url = `${this.host_url}/api/v1/account/logout`;

        return this.post<DeviceAccessToken>(url);
    }

    updateProfile(model: ProfileModel): Observable<ProfileModel> {
        const url = `${this.host_url}/api/`;

        return this.put<ProfileModel>(url, model);
    }

    getProfile(): Observable<ProfileModel> {
        const url = `${this.host_url}/api/`;

        return this.get<ProfileModel>(url);
    }
}
