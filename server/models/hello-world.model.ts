// Sample mongoose model
import * as mongoose from 'mongoose';

interface HelloWorldInterface extends mongoose.Document{
    hello: string;
    world: string;
}

export class HelloWorldModel {
    public schema: mongoose.Schema;
    public model: any;

    constructor() {
        this.schema = new mongoose.Schema({
            hello: {
                type: String,
                required: true
            },
            world: {
                type: String
            }
        });

        this.model = mongoose.model<HelloWorldInterface>('Helloworld', this.schema);
    }
}