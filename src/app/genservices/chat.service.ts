import { Injectable, Injector } from "@angular/core";
import { BaseService } from "~/app/rest/rest.service";
import { ChatBaseModel } from "~/app/genmodel/chat_base.model";
import { Observable } from "rxjs";
import { ChatModel } from "~/app/genmodel/chat.model";
import { Like } from "~/app/genmodel/like";
import { Page } from "~/app/genmodel/page";
import { RestList } from "~/app/rest/model";

@Injectable()
export class ChatService extends BaseService {
    constructor(inject: Injector) {
        super(inject);
    }

    create(model: ChatBaseModel): Observable<ChatModel> {
        const url = `${this.host_url}/api/Chat`;

        return this.post<ChatModel>(url, model);
    }

    read(id: number): Observable<ChatModel> {
        const url = `${this.host_url}/api/Chat/${id}`;

        return this.get<ChatModel>(url);
    }

    readAll(like: Like = null, page: Page = null): Observable<RestList<ChatModel>> {
        const url = `${this.host_url}/api/Chat`;

        return this.get<RestList<ChatModel>>(url);
    }

    update(id: number, model: ChatBaseModel): Observable<ChatModel> {
        const url = `${this.host_url}/api/Chat?id=${id}`;

        return this.put<ChatModel>(url, model);
    }
}
