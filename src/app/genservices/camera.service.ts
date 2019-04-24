import { Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RestCollection, EmptyAnswer, Pager, RestList } from "src/app/rest/model";
import { BaseService } from "src/app/rest/rest.service";
import { CounterBaseModel } from "src/app/genmodel/counter_base.model";
import { CounterModel } from "src/app/genmodel/counter.model";
import { Like } from "src/app/genmodel/like";
import { Page } from "src/app/genmodel/page";
import { CameraModel } from "~/app/genmodel/camera.model";
import { CameraBaseModel } from "~/app/genmodel/camera_base.model";

@Injectable()
export class CameraService extends BaseService {
    constructor(inject: Injector) {
        super(inject);
    }

    create(model: CameraBaseModel): Observable<CameraModel> {
        const url = `${this.host_url}/Camera`;

        return this.post<CameraModel>(url, model);
    }

    read(id: number): Observable<CameraModel> {
        const url = `${this.host_url}/Camera/{id}`;

        return this.get<CameraModel>(url);
    }

    readAll(like: Like = null, page: Page = null): Observable<RestList<CameraModel>> {
        const url = `${this.host_url}/Camera`;

        return this.get<RestList<CameraModel>>(url);
    }

    update(id: number, model: CameraBaseModel): Observable<CameraModel> {
        const url = `${this.host_url}/Camera?id=${id}`;

        return this.put<CameraModel>(url, model);
    }
}
