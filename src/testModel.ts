import dotenv from "dotenv";
import connectDb from "./config/database";
import { Student } from "./models/student";

dotenv.config();

const test = async () => {
  await connectDb();
  const student = new Student({ name: "Ashok1", age: 22, place: "Trivandrum" });
  await student.save();
  console.log("Student saved successfully: ", student);
};

test();
