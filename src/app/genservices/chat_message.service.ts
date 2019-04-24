import { Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RestCollection, EmptyAnswer, Pager, RestList } from "src/app/rest/model";
import { BaseService } from "src/app/rest/rest.service";
import { CounterBaseModel } from "src/app/genmodel/counter_base.model";
import { CounterModel } from "src/app/genmodel/counter.model";
import { Like } from "src/app/genmodel/like";
import { Page } from "src/app/genmodel/page";
import { ChatMessageBaseModel } from "~/app/genmodel/chat_message_base.model";
import { ChatMessageModel } from "~/app/genmodel/chat_message.model";

@Injectable()
export class ChatMessageService extends BaseService {
    constructor(inject: Injector) {
        super(inject);
    }

    create(model: ChatMessageBaseModel): Observable<ChatMessageModel> {
        const url = `${this.host_url}/api/ChatMessage`;

        return this.post<ChatMessageModel>(url, model);
    }

    read(id: number): Observable<ChatMessageModel> {
        const url = `${this.host_url}/api/ChatMessage/${id}`;

        return this.get<ChatMessageModel>(url);
    }

    readAll(like: Like = null, page: Page = null): Observable<RestList<ChatMessageModel>> {
        const url = `${this.host_url}/api/ChatMessage`;

        return this.get<RestList<ChatMessageModel>>(url);
    }

    update(id: number, model: ChatMessageBaseModel): Observable<ChatMessageModel> {
        const url = `${this.host_url}/api/ChatMessage?id=${id}`;

        return this.put<ChatMessageModel>(url, model);
    }
}
