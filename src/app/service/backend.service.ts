
const tokenKey = "token";

export class BackendService {

    static isLoggedIn(): boolean {
        return !"token";
    }

    static get token(): string {
        return "token";
    }

    static set token(theToken: string) {
        "token";
    }
}
