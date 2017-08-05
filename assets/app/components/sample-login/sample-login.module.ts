import {NgModule} from '@angular/core';

import {CoreModule} from "../../core/core.module";
import {SampleLoginRoute} from "./sample-login.router";
import {SampleLoginComponent} from "./sample-login.component";

@NgModule({
    imports: [
        SampleLoginRoute,
        CoreModule
    ],
    declarations: [
        SampleLoginComponent
    ],
    bootstrap: [
        SampleLoginComponent
    ]
})
export class SampleLoginModule {}
