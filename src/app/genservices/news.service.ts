import { Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RestCollection, EmptyAnswer, Pager, RestList } from "src/app/rest/model";
import { BaseService } from "src/app/rest/rest.service";
import { CounterBaseModel } from "src/app/genmodel/counter_base.model";
import { CounterModel } from "src/app/genmodel/counter.model";
import { Like } from "src/app/genmodel/like";
import { Page } from "src/app/genmodel/page";
import { NewsModel } from "~/app/genmodel/news.model";
import { NewsBaseModel } from "~/app/genmodel/news_base.model";

@Injectable()
export class NewsService extends BaseService {
    constructor(inject: Injector) {
        super(inject);
    }

    create(model: NewsBaseModel): Observable<NewsModel> {
        const url = `${this.host_url}/api/news`;

        return this.post<NewsModel>(url, model);
    }

    read(id: number): Observable<NewsModel> {
        const url = `${this.host_url}/api/news/${id}`;

        return this.get<NewsModel>(url);
    }

    readAll(like: Like = null, page: Page = null): Observable<RestList<NewsModel>> {
        const url = `${this.host_url}/api/news`;

        return this.get<RestList<NewsModel>>(url);
    }
}
