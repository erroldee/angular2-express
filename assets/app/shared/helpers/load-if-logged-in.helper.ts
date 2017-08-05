import {Injectable} from "@angular/core";
import {CanLoad, Router, Route} from "@angular/router";
import {DataStore} from "../data/data-store.helper";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoadIfLoggedIn implements CanLoad {
    constructor(
        private _dataStore: DataStore,
        private _router: Router
    ) {}

    canLoad(
        route: Route
    ): Observable<boolean>|Promise<boolean>|boolean {
        if (this._dataStore.getToken()) {
            return true;
        }

        // Navigate to the login page
        this._router.navigate(['/login']);

        return false;
    }
}