import {Injectable} from "@angular/core";
import {LoginDetails} from "../models/login-details.model";
import {CONSTANTS} from "../constants/constants";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class GetHelloWorldService {
    constructor(
        private _http: HttpClient
    ) {}

    getService(loginDetails: LoginDetails) {
        const BODY = JSON.stringify(loginDetails);
        const HEADERS = new HttpHeaders();

        HEADERS.set("Content-Type", "application/json");

        return this._http.post(
            CONSTANTS.getHelloWorldURL,
            BODY,
            {
                headers: HEADERS
            }
        );
    }
}