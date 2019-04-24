import { NewsBaseModel } from 'src/app/genmodel/news_base.model';
export class NewsModel implements NewsBaseModel{
	id: number;
	comment_enable: boolean;
	date: Date;
}
