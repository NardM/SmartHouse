import { Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RestCollection, EmptyAnswer, Pager, RestList } from "src/app/rest/model";
import { BaseService } from "src/app/rest/rest.service";
import { CounterBaseModel } from "src/app/genmodel/counter_base.model";
import { CounterModel } from "src/app/genmodel/counter.model";
import { Like } from "src/app/genmodel/like";
import { Page } from "src/app/genmodel/page";
import { CounterValueModel } from "~/app/genmodel/counter_value.model";
import { CounterValueBaseModel } from "~/app/genmodel/counter_value_base.model";

@Injectable()
export class CounterValueService extends BaseService {
    constructor(inject: Injector) {
        super(inject);
    }

    create(counterId: number, model: CounterValueBaseModel): Observable<CounterValueModel> {
        const url = `${this.host_url}/api/Counter/${counterId}/Value`;

        return this.post<CounterValueModel>(url, model);
    }

    read(counterId: number, id: number): Observable<CounterValueModel> {
        const url = `${this.host_url}/api/Counter/${counterId}/Value/${id}`;

        return this.get<CounterValueModel>(url);
    }

    readAll(counterId: number, like: Like = null, page: Page = null): Observable<RestList<CounterValueModel>> {
        const url = `${this.host_url}/api/Counter/${counterId}/Value`;

        return this.get<RestList<CounterValueModel>>(url);
    }

    update(counterId: number, id: number, model: CounterValueBaseModel): Observable<CounterValueModel> {
        const url = `${this.host_url}/api/Counter/${counterId}/Value/${id}`;

        return this.put<CounterValueModel>(url, model);
    }
}
