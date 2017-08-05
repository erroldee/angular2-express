import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataStore} from "./shared/data/data-store.helper";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(
        private _router: Router,
        private _dataStore: DataStore
    ) {}

    ngOnInit(): any {
        if (this._dataStore.getToken()) {
            this._router.navigate(["/dashboard"]);
        } else {
            this._router.navigate(["/login"]);
        }
    }
}
