import { AdBaseModel } from "~/app/genmodel/ad_base.model";
import { Injectable, Injector } from "@angular/core";
import { BaseService } from "~/app/rest/rest.service";
import { AdModel } from "~/app/genmodel/ad.model";
import { Observable } from "rxjs";
import { Like } from "~/app/genmodel/like";
import { Page } from "~/app/genmodel/page";
import { RestList } from "~/app/rest/model";

@Injectable()
export class AdService extends BaseService {
    constructor(inject: Injector) {
        super(inject);
    }

    create(model: AdBaseModel): Observable<AdModel> {
        const url = `${this.host_url}/Ad`;

        return this.post<AdModel>(url, model);
    }

    read(id: number): Observable<AdModel> {
        const url = `${this.host_url}/Ad/{id}`;

        return this.get<AdModel>(url);
    }

    readAll(like: Like = null, page: Page = null): Observable<RestList<AdModel>> {
        const url = `${this.host_url}/Ad`;

        return this.get<RestList<AdModel>>(url);
    }

    update(id: number, model: AdBaseModel): Observable<AdModel> {
        const url = `${this.host_url}/Ad?id=${id}`;

        return this.put<AdModel>(url, model);
    }
}
