import { Injectable, Injector } from "@angular/core";
import { ApplicationBaseModel } from "~/app/genmodel/application_base.model";
import { Observable } from "rxjs";
import { ApplicationModel } from "~/app/genmodel/application.model";
import { Like } from "~/app/genmodel/like";
import { Page } from "~/app/genmodel/page";
import { BaseService } from "~/app/rest/rest.service";
import { RestList } from "~/app/rest/model";

@Injectable()
export class ApplicationService extends BaseService {
    constructor(inject: Injector) {
        super(inject);
    }

    create(model: ApplicationBaseModel): Observable<ApplicationModel> {
        const url = `${this.host_url}/api/Application`;

        return this.post<ApplicationModel>(url, model);
    }

    read(id: number): Observable<ApplicationModel> {
        const url = `${this.host_url}/api/Application/${id}`;

        return this.get<ApplicationModel>(url);
    }

    readAll(like: Like = null, page: Page = null): Observable<RestList<ApplicationModel>> {
        const url = `${this.host_url}/api/Application`;

        return this.get<RestList<ApplicationModel>>(url);
    }

    update(id: number, model: ApplicationBaseModel): Observable<ApplicationModel> {
        const url = `${this.host_url}/api/Application?id=${id}`;

        return this.put<ApplicationModel>(url, model);
    }
}
