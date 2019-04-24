import { BaseService } from "~/app/rest/rest.service";
import { Injectable, Injector } from "@angular/core";
import { NewsCommentAssetsBaseModel } from "~/app/genmodel/news_comment_assets_base.model";
import { Observable } from "rxjs";
import { NewsCommentAssetsModel } from "~/app/genmodel/news_comment_assets.model";
import { Like } from "~/app/genmodel/like";
import { Page } from "~/app/genmodel/page";
import { RestList } from "~/app/rest/model";

@Injectable()
export class NewsCommentAssetsService extends BaseService {
    constructor(inject: Injector) {
        super(inject);
    }

    create(newsId: number, commentId: number, model: NewsCommentAssetsBaseModel): Observable<NewsCommentAssetsModel> {
        const url = `${this.host_url}/News/${newsId}/Comment/${commentId}/Assets`;

        return this.post<NewsCommentAssetsModel>(url, model);
    }

    read(newsId: number, commentId: number, id: number): Observable<NewsCommentAssetsModel> {
        const url = `${this.host_url}/News/{newsId}/Comment/${commentId}/Assets/${id}`;

        return this.get<NewsCommentAssetsModel>(url);
    }

    readAll(newsId: number, commentId: number, like: Like = null, page: Page = null): Observable<RestList<NewsCommentAssetsModel>> {
        const url = `${this.host_url}/News/{newsId}/Comment/${commentId}/Assets`;

        return this.get<RestList<NewsCommentAssetsModel>>(url);
    }

    update(newsId: number, commentId: number, id: number, model: NewsCommentAssetsBaseModel): Observable<NewsCommentAssetsModel> {
        const url = `${this.host_url}/News/{newsId}/Comment/${commentId}/Assets/${id}`;

        return this.put<NewsCommentAssetsModel>(url, model);
    }
}
