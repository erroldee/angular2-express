import * as express from 'express';
import {json, urlencoded} from 'body-parser';
import * as path from 'path';
import * as compression from 'compression';
import {Response, Request, NextFunction} from 'express';

import {HelloWorldRouter} from "./routes/hello-world.route";
import * as mongoose from "mongoose";
import {Constants} from "./constants/constants";

export class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.setRoutes();
    }

    private middleware() {
        mongoose.connect(Constants.mongoServer + ":" + Constants.mongoPort + "/" + Constants.mongoDB);

        this.express.disable('x-powered-by');

        this.express.use(json());
        this.express.use(compression());
        this.express.use(urlencoded({ extended: true }));
    }

    private setRoutes() {
        this.express.use('/api/helloWorld', new HelloWorldRouter().router);

        if (this.express.get('env') === 'production') {
            this.express.use(express.static(path.join(__dirname, '../client')));
        }

        this.express.use(function(req: Request, res: Response, next: NextFunction) {
            let err: {[s: string]: any} = {
                status: 404,
                message: "Not Found"
            };
            next(err);
        });

        this.express.use(function(err: any, req: Request, res: Response) {
            res.status(err.status || 500);
            res.json({
                error: {},
                message: err.message
            });
        });
    }
}