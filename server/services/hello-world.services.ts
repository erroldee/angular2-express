import {HelloWorldModel} from "../models/hello-world.model";

export class HelloWorldService {
    static getSampleResponse(callback: Function): void {
        let helloModel = new HelloWorldModel().model;
        let newHello = new helloModel({
            hello: 'hello',
            world: 'world'
        });

        newHello.save(function(err: any, result: any): void {
            if (err) {
                console.log({
                    error: true,
                    code: 500,
                    message: 'DBFailure: Failed to create',
                });

                callback({
                    error: false
                });
            } else {
                console.log({
                    error: false,
                    success: result
                });

                callback({
                    error: false
                });
            }
        });
    }
}