import mongoose, { Schema, Document } from "mongoose";

//Define the typescript interface for Student
export interface StudentDetail extends Document {
  name: string;
  age: number;
  place: string;
}

//Define the Mongoose Schema
const StudentSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  place: { type: String, required: true },
});

//Create and export the model
export const Student = mongoose.model<StudentDetail>("Student", StudentSchema);
