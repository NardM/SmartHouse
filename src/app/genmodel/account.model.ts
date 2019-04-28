import { ResidentModel } from "~/app/genmodel/resident.model";
import { AccountBaseModel } from "~/app/genmodel/account_base.model";
export class AccountModel extends AccountBaseModel {
    id: number;
    residents: Array<ResidentModel>;
    email: string;
    phone: string;
    username: string;
    first_name: string;
    last_name: string;

    constructor(data: any) {
        super();
        this.id = data.id ? data.id : "Не заполнено";
        this.email = data.email ? data.email : "Не заполнено";
        this.phone = data.phone ? data.phone : "Не заполнено";
        this.username = data.username ? data.username : "Не заполнено";
        this.first_name = data.first_name ? data.first_name : "Не заполнено";
        this.last_name = data.last_name ? data.last_name : "Не заполнено";
    }
}
