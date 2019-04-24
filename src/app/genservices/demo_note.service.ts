import { Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RestCollection, EmptyAnswer, Pager, RestList } from "src/app/rest/model";
import { BaseService } from "src/app/rest/rest.service";
import { CounterBaseModel } from "src/app/genmodel/counter_base.model";
import { CounterModel } from "src/app/genmodel/counter.model";
import { Like } from "src/app/genmodel/like";
import { Page } from "src/app/genmodel/page";
import { DemoNoteBaseModel } from "~/app/genmodel/demo_note_base.model";
import { DemoNoteModel } from "~/app/genmodel/demo_note.model";

@Injectable()
export class DemoNoteService extends BaseService {
    constructor(inject: Injector) {
        super(inject);
    }

    create(model: DemoNoteBaseModel): Observable<DemoNoteModel> {
        const url = `${this.host_url}/demo/api/Note`;

        return this.post<DemoNoteModel>(url, model);
    }

    read(id: number): Observable<DemoNoteModel> {
        const url = `${this.host_url}/demo/api/Note/${id}`;

        return this.get<DemoNoteModel>(url);
    }

    readAll(like: Like = null, page: Page = null): Observable<RestList<DemoNoteModel>> {
        const url = `${this.host_url}/demo/api/Note`;

        return this.get<RestList<DemoNoteModel>>(url);
    }

    update(id: number, model: DemoNoteBaseModel): Observable<DemoNoteModel> {
        const url = `${this.host_url}/demo/api/Note?id=${id}`;

        return this.put<DemoNoteModel>(url, model);
    }

    remove(id: number): Observable<DemoNoteModel> {
        const url = `${this.host_url}/demo/api/Note/${id}`;

        return this.delete<DemoNoteModel>(url);
    }
}
