import {RouterModule, Route} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SampleLoginComponent} from "./sample-login.component";

const sampleLoginRoutes: Route[] = [
    {
        path: '',
        component: SampleLoginComponent
    }
];

export const SampleLoginRoute: ModuleWithProviders = RouterModule.forChild(sampleLoginRoutes);