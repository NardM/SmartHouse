import { AdBaseModel } from 'src/app/genmodel/ad_base.model';
export class AdModel implements AdBaseModel{
	id: number;
	text: string;
	date: Date;
}
