import { ChatBaseModel } from "src/app/genmodel/chat_base.model";
export class ChatModel implements ChatBaseModel {
	id: number;
	date: Date;
	type: number;
	name: string;
	last_modify: Date;
}
