#!/usr/bin/env node
import * as express from 'express';
import {serverPort} from './config';
import * as http from 'http';
import {App} from "./app";

class ExpressServer {
    private port: number|string|boolean;
    private app: express.Application;
    private server: any;

    constructor() {
        this.port = this.normalizePort(process.env.PORT || serverPort);
        this.app = new App().express;

        this.app.set('port', this.port);

        this.startServer();
    }

    startServer() {
        this.server = http.createServer(this.app);

        this.server.listen(this.port);
        this.server.on('error', this.onError.bind(this));
        this.server.on('listening', this.onListening.bind(this));
    }

    normalizePort(val: number | string): boolean | number | string {
        let port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
        if (isNaN(port)) return val;
        else if (port >= 0) return port;
        else return false;
    }

    onError(error: NodeJS.ErrnoException): void {
        if (error.syscall !== 'listen') throw error;
        let bind = (typeof this.port === 'string') ? 'Pipe ' + this.port : 'Port ' + this.port;
        switch(error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
        }
    }

    onListening(): void {
        let addr = this.server.address();
        let bind = (typeof addr === 'string') ? 'pipe ' + addr : 'port ' + addr.port;
        console.log('Listening on ' + bind);
    }
}

new ExpressServer();