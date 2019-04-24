import { AccountBaseModel } from "src/app/genmodel/account_base.model";
import { ResidentModel } from "~/app/genmodel/resident.model";
export class AccountModel extends AccountBaseModel {
	id: number;
	residents: Array<ResidentModel>;
	email: string;
	phone: string;
	username: string;
	first_name: string;
	last_name: string;
}
