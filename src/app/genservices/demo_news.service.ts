import { Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RestCollection, EmptyAnswer, Pager, RestList } from "src/app/rest/model";
import { BaseService } from "src/app/rest/rest.service";
import { CounterBaseModel } from "src/app/genmodel/counter_base.model";
import { CounterModel } from "src/app/genmodel/counter.model";
import { Like } from "src/app/genmodel/like";
import { Page } from "src/app/genmodel/page";
import { DemoNewsBaseModel } from "~/app/genmodel/demo_news_base.model";
import { DemoNewsModel } from "~/app/genmodel/demo_news.model";

@Injectable()
export class DemoNewsService extends BaseService {
    constructor(inject: Injector) {
        super(inject);
    }

    create(model: DemoNewsBaseModel): Observable<DemoNewsModel> {
        const url = `${this.host_url}/demo/api/News`;

        return this.post<DemoNewsModel>(url, model);
    }

    read(id: number): Observable<DemoNewsModel> {
        const url = `${this.host_url}/demo/api/News/${id}`;

        return this.get<DemoNewsModel>(url);
    }

    readAll(like: Like, page: Page): Observable<RestList<DemoNewsModel>> {
        const url = `${this.host_url}/demo/api/News`;

        return this.get<RestList<DemoNewsModel>>(url);
    }

    update(id: number, model: DemoNewsBaseModel): Observable<DemoNewsModel> {
        const url = `${this.host_url}/demo/api/News?id=${id}`;

        return this.put<DemoNewsModel>(url, model);
    }
}
