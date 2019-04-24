import { Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RestCollection, EmptyAnswer, Pager } from "src/app/rest/model";
import { BaseService } from "src/app/rest/rest.service";
import { CounterBaseModel } from "src/app/genmodel/counter_base.model";
import { CounterModel } from "src/app/genmodel/counter.model";
import { Like } from "src/app/genmodel/like";
import { Page } from "src/app/genmodel/page";
import { RegisterDeviceBindingModel } from "~/app/genmodel/register_device_binding.model";
import { DeviceAccessToken } from "~/app/genmodel/device_access_token";

@Injectable()
export class DeviceService extends BaseService {
    constructor(inject: Injector) {
        super(inject);
    }

    create(model: RegisterDeviceBindingModel): Observable<DeviceAccessToken> {
        const url = `${this.host_url}/api/v1/device`;

        return this.post<DeviceAccessToken>(url, model);
    }

    refreshToken(model: RegisterDeviceBindingModel): Observable<DeviceAccessToken> {
        const url = `${this.host_url}/api/v1/device/token/refresh`;

        return this.put<DeviceAccessToken>(url, model);
    }
}
