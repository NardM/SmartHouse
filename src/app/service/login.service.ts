import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenService } from "~/app/service/token.service";
import { map, tap } from "rxjs/operators";

export interface Logout{
    device_id: string;
    app_type: string;
}

@Injectable()
export class LoginYouService {

    constructor(private   http: HttpClient,
                private  tokenService: TokenService) {
    }

    login(phone: string) {
        return this.tokenService.token().pipe(
           map(() => null));
    }

    confirm(phone: string, code: string)  {

    }

    private static handleError(error: any) {

    }
}
 class LoginModel{
    constructor(public phone: String){}
}

 class ConfirmModel{
    constructor(
        private  phone: String,
        private code: String
    ){}
}
