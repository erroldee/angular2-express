import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {ROUTES_CONFIG} from "./app.router";
import {CoreModule} from "./core/core.module";
import {DataStore} from "./shared/data/data-store.helper";
import {LoadIfLoggedIn} from "./shared/helpers/load-if-logged-in.helper";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        ROUTES_CONFIG,
        CoreModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        DataStore,
        LoadIfLoggedIn
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
