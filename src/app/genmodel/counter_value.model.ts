import { CounterValueBaseModel } from 'src/app/genmodel/counter_value_base.model';
export class CounterValueModel implements CounterValueBaseModel{
	id: number;
	value: number;
	comment: string;
	date: Date;
}
