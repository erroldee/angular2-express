import {Component, Directive, ChangeDetectionStrategy} from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-ui-modal',
    templateUrl: 'modal.component.html',
    styleUrls: ['modal.component.css']
})
export class ModalComponent {
    constructor() {}
}

@Directive({
    selector: 'app-modal-header, app-modal-body'
})
export class ModalDirectivesDirective {}
