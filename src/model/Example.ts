import { Schema, model, Document } from "mongoose";

export interface IExample extends Document {
	id: number;
	name: string;
}

const ExampleSchema: Schema = new Schema({
	id: { type: String },
	name: { type: String },
});

export default model<IExample>("Example", ExampleSchema);
