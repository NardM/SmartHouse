import { DemoNewsBaseModel } from 'src/app/genmodel/demo_news_base.model';
export class DemoNewsModel implements DemoNewsBaseModel{
	id: number;
	title: string;
	text: string;
	url: string;
}
