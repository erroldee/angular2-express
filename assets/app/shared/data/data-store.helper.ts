import {Injectable} from "@angular/core";
declare var sessionStorage: any;

@Injectable()
export class DataStore {
    private token: string = null;
    private redirectURL: string = "/dashboard";

    setToken(token: string) {
        this.sessionStore("token", token);
        this.token = token;
    };

    getToken(): string {
        if (!this.token) {
            this.token = this.sessionGet("token");
        }

        return this.token;
    };

    setRedirectURL(url: string) {
        this.redirectURL = url;
    };

    getRedirectURL(): string {
        return this.redirectURL;
    };

    clearEverything() {
        this.token = null;
        sessionStorage.clear();
    };

    sessionStore(itemParam: string, itemValue: any) {
        sessionStorage.setItem(itemParam, JSON.stringify(itemValue));
    };

    sessionGet(itemParam: string): any {
        return JSON.parse(sessionStorage.getItem(itemParam));
    };
}