import { NewsCommentBaseModel } from "~/app/genmodel/news_comment_base.model";
import { Injectable, Injector } from "@angular/core";
import { BaseService } from "~/app/rest/rest.service";
import { Observable } from "rxjs";
import { NewsCommentModel } from "~/app/genmodel/news_comment.model";
import { Like } from "~/app/genmodel/like";
import { Page } from "~/app/genmodel/page";
import { RestList } from "~/app/rest/model";

@Injectable()
export class NewsCommentService extends BaseService {
    constructor(inject: Injector) {
        super(inject);
    }

    create(id: number, model: NewsCommentBaseModel): Observable<NewsCommentModel> {
        const url = `${this.host_url}/api/news/${id}/comment`;

        return this.post<NewsCommentModel>(url, model);
    }

    read(newsId: number, id: number): Observable<NewsCommentModel> {
        const url = `${this.host_url}/api/news/${newsId}/comment/${id}`;

        return this.get<NewsCommentModel>(url);
    }

    readAll(id: number, like: Like = null, page: Page = null): Observable<RestList<NewsCommentModel>> {
        const url = `${this.host_url}/api/news/${id}/comment`;

        return this.get<RestList<NewsCommentModel>>(url);
    }

    update(newsId: number, id: number, model: NewsCommentBaseModel): Observable<NewsCommentModel> {
        const url = `${this.host_url}/api/news/${newsId}/comment/${id}`;

        return this.put<NewsCommentModel>(url, model);
    }
}
