import {Injectable} from "@angular/core";
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {DataStore} from "../data/data-store.helper";
import {Observable} from "rxjs/Observable";

@Injectable()
export class IsLoggedIn implements CanActivate {
    constructor(
        private _dataStore: DataStore,
        private _router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        if (this._dataStore.getToken()) {
            return true;
        }

        // Store the attempted URL for redirecting
        this._dataStore.setRedirectURL(state.url);

        // Navigate to the login page
        this._router.navigate(['/login']);
        
        return false;
    }
}