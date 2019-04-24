import { Like } from "~/app/genmodel/like";
import { UkModel } from "~/app/genmodel/uk.model";
import { Observable } from "rxjs";
import { UkBaseModel } from "~/app/genmodel/uk_base.model";
import { Injectable, Injector } from "@angular/core";
import { BaseService } from "~/app/rest/rest.service";
import { Page } from "~/app/genmodel/page";
import { RestList } from "~/app/rest/model";

@Injectable()
export class UkService extends BaseService {
    constructor(inject: Injector) {
        super(inject);
    }

    create(model: UkBaseModel): Observable<UkModel> {
        const url = `${this.host_url}/api/Uk`;

        return this.post<UkModel>(url, model);
    }

    read(id: number): Observable<UkModel> {
        const url = `${this.host_url}/api/Uk/${id}`;

        return this.get<UkModel>(url);
    }

    readAll(like: Like = null, page: Page = null): Observable<RestList<UkModel>> {
        const url = `${this.host_url}/api/Uk`;

        return this.get<RestList<UkModel>>(url);
    }

    update(id: number, model: UkBaseModel): Observable<UkModel> {
        const url = `${this.host_url}/api/Uk?id=${id}`;

        return this.put<UkModel>(url, model);
    }
}
