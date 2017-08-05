import {RouterModule, Route, PreloadAllModules} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoadIfLoggedIn} from "./shared/helpers/load-if-logged-in.helper";

const routes: Route[] = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        loadChildren: 'app/components/sample-login/sample-login.module#SampleLoginModule',
        path: 'login'
    },
    {
        loadChildren: 'app/components/sample-dashboard/sample-dashboard.module#SampleDashboardModule',
        path: 'dashboard',
        canLoad: [
            LoadIfLoggedIn
        ]
    },
    {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];

export const ROUTES_CONFIG: ModuleWithProviders = RouterModule.forRoot(
    routes,
    {
        useHash: true,
        preloadingStrategy: PreloadAllModules
    }
);
