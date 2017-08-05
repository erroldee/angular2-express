import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {DataStore} from "../../shared/data/data-store.helper";

@Component({
    selector: 'sample-login-component',
    styleUrls: ['sample-login.css'],
    templateUrl: 'sample-login.html'
})
export class SampleLoginComponent {
    constructor(
        private _dataStore: DataStore,
        private _router: Router
    ) {
        if (this._dataStore.getToken()) {
            this.redirectToDashboard();
        }
    }

    login() {
        this._dataStore.setToken("token");
        this._router.navigate([this._dataStore.getRedirectURL()]);
    }

    redirectToDashboard() {
        this._router.navigate(["/dashboard"]);
    }
}