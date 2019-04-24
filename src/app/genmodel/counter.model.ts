import { CounterBaseModel } from 'src/app/genmodel/counter_base.model';
export class CounterModel implements CounterBaseModel{
	id: number;
	date: Date;
	last_indication_date: Date;
	last_indication: number;
	number: string;
	type: number;
}
