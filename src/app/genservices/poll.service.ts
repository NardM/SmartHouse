import { Injectable, Injector } from "@angular/core";
import { BaseService } from "~/app/rest/rest.service";
import { PollBaseModel } from "~/app/genmodel/poll_base.model";
import { Observable } from "rxjs";
import { PollModel } from "~/app/genmodel/poll.model";
import { Like } from "~/app/genmodel/like";
import { Page } from "~/app/genmodel/page";
import { RestList } from "~/app/rest/model";

@Injectable()
export class PollService extends BaseService {
    constructor(inject: Injector) {
        super(inject);
    }

    create(model: PollBaseModel): Observable<PollModel> {
        const url = `${this.host_url}/Poll`;

        return this.post<PollModel>(url, model);
    }

    read(id: number): Observable<PollModel> {
        const url = `${this.host_url}/Poll/${id}`;

        return this.get<PollModel>(url);
    }

    readAll(like: Like = null, page: Page = null): Observable<RestList<PollModel>> {
        const url = `${this.host_url}/Poll`;

        return this.get<RestList<PollModel>>(url);
    }

    update(id: number, model: PollBaseModel): Observable<PollModel> {
        const url = `${this.host_url}/Poll/${id}`;

        return this.put<PollModel>(url, model);
    }
}
