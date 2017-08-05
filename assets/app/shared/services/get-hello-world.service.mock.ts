import {Injectable} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

@Injectable()
export class MockGetHelloWorldService {
    subscription: Subscription;
    content: any;
    error: boolean = false;

    constructor() {
        this.subscription = new Subscription();
        spyOn(this.subscription, 'unsubscribe');
    }

    getService() {
        return this;
    }

    subscribe(next, error) {
        if (this.content && next && !this.error) {
            next(this.content);
        }

        if (this.error) {
            error(this.error);
        }

        return this.subscription;
    }
}