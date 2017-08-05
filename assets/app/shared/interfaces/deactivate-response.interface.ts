import {Observable} from 'rxjs/Observable';

export interface DeactivateResponse {
    canDeactivate: () => boolean | Observable<boolean>;
}