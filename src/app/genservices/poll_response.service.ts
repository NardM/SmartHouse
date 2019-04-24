import { PollResponseBaseModel } from "~/app/genmodel/poll_response_base.model";
import { Injectable, Injector } from "@angular/core";
import { BaseService } from "~/app/rest/rest.service";
import { Observable } from "rxjs";
import { PollResponseModel } from "~/app/genmodel/poll_response.model";
import { Like } from "~/app/genmodel/like";
import { Page } from "~/app/genmodel/page";
import { RestList } from "~/app/rest/model";

@Injectable()
export class PollResponseService extends BaseService {
    constructor(inject: Injector) {
        super(inject);
    }

    create(model: PollResponseBaseModel): Observable<PollResponseModel> {
        const url = `${this.host_url}/PollResponse`;

        return this.post<PollResponseModel>(url, model);
    }

    read(id: number): Observable<PollResponseModel> {
        const url = `${this.host_url}/PollResponse/${id}`;

        return this.get<PollResponseModel>(url);
    }

    readAll(like: Like = null, page: Page = null): Observable<RestList<PollResponseModel>> {
        const url = `${this.host_url}/PollResponse`;

        return this.get<RestList<PollResponseModel>>(url);
    }

    update(id: number, model: PollResponseBaseModel): Observable<PollResponseModel> {
        const url = `${this.host_url}/PollResponse?id=${id}`;

        return this.put<PollResponseModel>(url, model);
    }
}
