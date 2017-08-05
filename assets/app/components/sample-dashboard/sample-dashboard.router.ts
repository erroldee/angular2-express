import {RouterModule, Route} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SampleDashboardComponent} from "./sample-dashboard.component";
import {DashboardModalComponent} from "./dashboardmodal/dashboardmodal.component";
import {IsLoggedIn} from "../../shared/helpers/is-logged-in.helper";
import {CanLeave} from "../../shared/helpers/can-leave.helper";

const sampleDashboardRoutes: Route[] = [
    {
        path: '',
        component: SampleDashboardComponent,
        canActivate: [
            IsLoggedIn
        ],
        canDeactivate: [
            CanLeave
        ]
    },
    {
        path: 'dashboardmodal',
        component: DashboardModalComponent,
        outlet: 'modal'
    }
];

export const SampleDashboardRoute: ModuleWithProviders = RouterModule.forChild(sampleDashboardRoutes);