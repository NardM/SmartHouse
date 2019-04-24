import { Injectable, Injector } from "@angular/core";
import { BaseService } from "~/app/rest/rest.service";
import { Observable } from "rxjs";
import { ResidentModel } from "~/app/genmodel/resident.model";
import { Like } from "~/app/genmodel/like";
import { Page } from "~/app/genmodel/page";
import { RestList } from "~/app/rest/model";
import { ResidentBaseModel } from "~/app/genmodel/resident_base.model";

@Injectable()
export class ResidentService extends BaseService {
    constructor(inject: Injector) {
        super(inject);
    }

    read(id: number): Observable<ResidentModel> {
        const url = `${this.host_url}/Resident/${id}`;

        return this.get<ResidentModel>(url);
    }

    readAll(like: Like = null, page: Page = null): Observable<RestList<ResidentModel>> {
        const url = `${this.host_url}/Resident`;

        return this.get<RestList<ResidentModel>>(url);
    }

    update(id: number, model: ResidentBaseModel): Observable<ResidentModel> {
        const url = `${this.host_url}/Resident?id=${id}`;

        return this.put<ResidentModel>(url, model);
    }
}
