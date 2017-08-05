import {Injectable} from '@angular/core';
declare let window: any;

/**
 * Async modal dialog service
 * DialogService makes this app easier to test by faking this service.
 * TODO: better modal implementation that doesn't use window.confirm
 */
@Injectable()
export class CheckConfirm {
    /**
     * Ask user to confirm an action. `message` explains the action and choices.
     * Returns promise resolving to `true`=confirm or `false`=cancel
     */
    confirm(message?: string): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            return resolve(window.confirm(message || 'Is it OK?'));
        });
    };
}