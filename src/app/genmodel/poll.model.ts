import { PollBaseModel } from 'src/app/genmodel/poll_base.model';
export class PollModel implements PollBaseModel{
	id: number;
	comment_enable: boolean;
}
