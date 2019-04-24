import { NewsCommentBaseModel } from 'src/app/genmodel/news_comment_base.model';
export class NewsCommentModel implements NewsCommentBaseModel{
	id: number;
	date: Date;
	text: string;
}
