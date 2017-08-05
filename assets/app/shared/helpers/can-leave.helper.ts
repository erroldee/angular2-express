import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {DeactivateResponse} from "../interfaces/deactivate-response.interface";

@Injectable()
export class CanLeave implements CanDeactivate<DeactivateResponse> {
    canDeactivate(component: DeactivateResponse): Observable<boolean>|Promise<boolean>|boolean {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}