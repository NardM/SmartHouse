import { ChatMessageBaseModel } from 'src/app/genmodel/chat_message_base.model';
export class ChatMessageModel implements ChatMessageBaseModel{
	id: number;
	message: string;
	date: Date;
	status: number;
}
