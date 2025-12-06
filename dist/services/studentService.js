"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const student_1 = require("../models/student");
//Service class - handles all student-related business logic
class StudentService {
    //Get all students
    async getAllStudents() {
        return await student_1.Student.find();
    }
    //Get student by ID
    async getStudentById(id) {
        return await student_1.Student.findById(id);
    }
    //Create a new student
    async createStudent(studentData) {
        const student = new student_1.Student(studentData);
        return (await student.save());
    }
    //Update student by ID
    async updateStudent(id, updateData) {
        return await student_1.Student.findByIdAndUpdate(id, updateData, { new: true });
    }
    //Delete student by ID
    async deleteStudent(id) {
        const result = await student_1.Student.findByIdAndDelete(id);
        return result !== null;
    }
}
exports.StudentService = StudentService;
//# sourceMappingURL=studentService.js.map