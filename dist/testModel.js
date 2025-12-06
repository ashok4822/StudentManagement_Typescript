"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./config/database"));
const student_1 = require("./models/student");
dotenv_1.default.config();
const test = async () => {
    await (0, database_1.default)();
    const student = new student_1.Student({ name: "Ashok1", age: 22, place: "Trivandrum" });
    await student.save();
    console.log("Student saved successfully: ", student);
};
test();
//# sourceMappingURL=testModel.js.map