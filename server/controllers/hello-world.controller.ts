import {HelloWorldService} from "../services/hello-world.services";
import {HelloWorldHelper} from "../helpers/hello-world.helper";

export class HelloWorldController {
    constructor() {}

    public helloWorld(callback: Function): void {
        HelloWorldService.getSampleResponse((response: {[s: string]: any}): void => {
            callback({
                error: response.error,
                message: HelloWorldHelper.getHelp()
            });
        });
    }
}