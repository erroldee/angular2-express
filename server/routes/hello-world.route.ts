import {Router, Response, Request, NextFunction} from 'express';
import {HelloWorldController} from "../controllers/hello-world.controller";

export class HelloWorldRouter {
    public router: Router;
    public helloWorldController: HelloWorldController;

    constructor() {
        this.router = Router();
        this.helloWorldController = new HelloWorldController();
        this.init();
    }

    init() {
        this.router.use("/", function(req: Request, res: Response, next: NextFunction) {
            // do something here global to all routers below
            next();
        });

        this.router.post("/", function(req: Request, res: Response) {
            // req.body would hold the parameters
            this.helloWorldController.helloWorld(function(response) {
                res.status(200).json({
                    error: response.error,
                    message: response.message
                });
            });
        }.bind(this));
    }
}