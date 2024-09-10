// src/models/userModel.ts

import mongoose, { Document, Schema } from "mongoose";

// Define the TypeScript interface for the User model
export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    createdAt?: Date; // Optional field
}

// Define the Mongoose schema
const userSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

// Export the User model
export default mongoose.model<IUser>("User", userSchema);
