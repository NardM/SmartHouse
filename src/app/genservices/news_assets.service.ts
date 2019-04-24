import { ImageBitmapModel } from "~/app/genmodel/image_bitmap.model";
import { Injectable, Injector } from "@angular/core";
import { NewsAssetsModel } from "~/app/genmodel/news_assets.model";
import { BaseService } from "~/app/rest/rest.service";
import { Observable } from "rxjs";
import { Like } from "~/app/genmodel/like";
import { Page } from "~/app/genmodel/page";
import { RestList } from "~/app/rest/model";
import { NewsAssetsBaseModel } from "~/app/genmodel/news_assets_base.model";

@Injectable()
export class NewsAssetsService extends BaseService {
    constructor(inject: Injector) {
        super(inject);
    }

    create(newsId: number, model: ImageBitmapModel): Observable<NewsAssetsModel> {
        const url = `${this.host_url}/api/news/${newsId}/assets`;

        return this.post<NewsAssetsModel>(url, model);
    }

    read(newsId: number, id: number): Observable<NewsAssetsModel> {
        const url = `${this.host_url}/api/news/${newsId}/assets/${id}?id=${id}`;

        return this.get<NewsAssetsModel>(url);
    }

    readAll(newsId: number, like: Like = null, page: Page = null): Observable<RestList<NewsAssetsModel>> {
        const url = `${this.host_url}/api/news/${newsId}/assets`;

        return this.get<RestList<NewsAssetsModel>>(url);
    }

    update(newsId: number, id: number, model: NewsAssetsBaseModel): Observable<NewsAssetsModel> {
        const url = `${this.host_url}/api/news/${newsId}/assets/${id}?id=${id}`;

        return this.put<NewsAssetsModel>(url, model);
    }

    remove(newsId: number, id: number): Observable<NewsAssetsModel> {
        const url = `${this.host_url}/api/news/${newsId}/assets/${id}?id=${id}`;

        return this.delete<NewsAssetsModel>(url);
    }
}
