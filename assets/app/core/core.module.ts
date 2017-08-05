import {NgModule} from '@angular/core';

import {ModalComponent, ModalDirectivesDirective} from './components/modal/modal.component';
import {RouterModule} from '@angular/router';
import {LoaderComponent} from './components/loader/loader.component';
import {SampleConsoleDirective} from "./directives/sample-console.directive";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        ModalComponent,
        ModalDirectivesDirective,
        LoaderComponent,
        SampleConsoleDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ModalComponent,
        ModalDirectivesDirective,
        LoaderComponent,
        SampleConsoleDirective
    ]
})
export class CoreModule {}