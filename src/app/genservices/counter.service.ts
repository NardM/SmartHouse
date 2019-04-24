import { Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RestCollection, EmptyAnswer, Pager, RestList } from "src/app/rest/model";
import { BaseService } from "src/app/rest/rest.service";
import { CounterBaseModel } from "src/app/genmodel/counter_base.model";
import { CounterModel } from "src/app/genmodel/counter.model";
import { Like } from "src/app/genmodel/like";
import { Page } from "src/app/genmodel/page";

@Injectable()
export class CounterService extends BaseService {
    constructor(inject: Injector) {
        super(inject);
    }

    create(model: CounterBaseModel): Observable<CounterModel> {
        const url = `${this.host_url}/api/Counter`;

        return this.post<CounterModel>(url, model);
    }

    read(id: number): Observable<CounterModel> {
        const url = `${this.host_url}/api/Counter/${id}`;

        return this.get<CounterModel>(url);
    }

    readAll(like: Like = null, page: Page = null): Observable<RestList<CounterModel>> {
        const url = `${this.host_url}/api/Counter`;

        return this.get<RestList<CounterModel>>(url);
    }

    update(id: number, model: CounterBaseModel): Observable<CounterModel> {
        const url = `${this.host_url}/api/Counter?id=${id}`;

        return this.put<CounterModel>(url, model);
    }
}
