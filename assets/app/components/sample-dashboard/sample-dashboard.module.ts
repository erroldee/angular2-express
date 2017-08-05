import {NgModule} from '@angular/core';

import {CoreModule} from "../../core/core.module";
import {SampleDashboardRoute} from "./sample-dashboard.router";
import {SampleDashboardComponent} from "./sample-dashboard.component";
import {DashboardModalComponent} from "./dashboardmodal/dashboardmodal.component";
import {IsLoggedIn} from "../../shared/helpers/is-logged-in.helper";
import {CanLeave} from "../../shared/helpers/can-leave.helper";
import {CheckConfirm} from "../../shared/helpers/check-confirm.helper";
import {GetHelloWorldService} from "../../shared/services/get-hello-world.service";

@NgModule({
    imports: [
        CoreModule,
        SampleDashboardRoute
    ],
    declarations: [
        SampleDashboardComponent,
        DashboardModalComponent
    ],
    providers: [
        IsLoggedIn,
        CanLeave,
        CheckConfirm,
        GetHelloWorldService
    ],
    bootstrap: [
        SampleDashboardComponent
    ]
})
export class SampleDashboardModule {}