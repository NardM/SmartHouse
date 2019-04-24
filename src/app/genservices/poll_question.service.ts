import { Injectable, Injector } from "@angular/core";
import { BaseService } from "~/app/rest/rest.service";
import { PollQuestionBaseModel } from "~/app/genmodel/poll_question_base.model";
import { Observable } from "rxjs";
import { PollQuestionModel } from "~/app/genmodel/poll_question.model";
import { Like } from "~/app/genmodel/like";
import { Page } from "~/app/genmodel/page";
import { RestList } from "~/app/rest/model";

@Injectable()
export class PollQuestionService extends BaseService {
    constructor(inject: Injector) {
        super(inject);
    }

    create(pollId: number, model: PollQuestionBaseModel): Observable<PollQuestionModel> {
        const url = `${this.host_url}/Poll/${pollId}/Question`;

        return this.post<PollQuestionModel>(url, model);
    }

    read(pollId: number, id: number): Observable<PollQuestionModel> {
        const url = `${this.host_url}/Poll/${pollId}/Question/${id}`;

        return this.get<PollQuestionModel>(url);
    }

    readAll(pollId: number, like: Like = null, page: Page = null): Observable<RestList<PollQuestionModel>> {
        const url = `${this.host_url}/Poll/${pollId}/Question`;

        return this.get<RestList<PollQuestionModel>>(url);
    }

    update(pollId: number, id: number, model: PollQuestionBaseModel): Observable<PollQuestionModel> {
        const url = `${this.host_url}/Poll/${pollId}/Question?id=${id}`;

        return this.put<PollQuestionModel>(url, model);
    }
}
