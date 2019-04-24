import { ServiceRequestBaseModel } from "~/app/genmodel/service_request_base.model";
import { ServiceRequestModel } from "~/app/genmodel/service_request.model";
import { Injectable, Injector } from "@angular/core";
import { BaseService } from "~/app/rest/rest.service";
import { Observable } from "rxjs";
import { Like } from "~/app/genmodel/like";
import { Page } from "~/app/genmodel/page";
import { RestList } from "~/app/rest/model";

@Injectable()
export class ServiceRequestService extends BaseService {
    constructor(inject: Injector) {
        super(inject);
    }

    create(model: ServiceRequestBaseModel): Observable<ServiceRequestModel> {
        const url = `${this.host_url}/api/Service/Request`;

        return this.post<ServiceRequestModel>(url, model);
    }

    read(id: number): Observable<ServiceRequestModel> {
        const url = `${this.host_url}/api/Service/Request/${id}`;

        return this.get<ServiceRequestModel>(url);
    }

    readAll(like: Like = null, page: Page = null): Observable<RestList<ServiceRequestModel>> {
        const url = `${this.host_url}/api/Service/Request`;

        return this.get<RestList<ServiceRequestModel>>(url);
    }

    update(id: number, model: ServiceRequestBaseModel): Observable<ServiceRequestModel> {
        const url = `${this.host_url}/api/Service/Request?id=${id}`;

        return this.put<ServiceRequestModel>(url, model);
    }
}
