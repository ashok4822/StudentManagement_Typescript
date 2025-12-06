import { StudentRequest, StudentResponse } from "../models/requestResponse";
import { Student, StudentDetail } from "../models/student";

//Service class - handles all student-related business logic
export class StudentService {
  //Get all students
  async getAllStudents(): Promise<StudentResponse[]> {
    return await Student.find();
  }

  //Get student by ID
  async getStudentById(id: string): Promise<StudentResponse | null> {
    return await Student.findById(id);
  }

  //Create a new student
  async createStudent(
    studentData: Partial<StudentRequest>
  ): Promise<StudentResponse> {
    const student = new Student(studentData);
    return (await student.save()) as StudentResponse;
  }

  //Update student by ID
  async updateStudent(
    id: string,
    updateData: Partial<StudentRequest>
  ): Promise<StudentResponse | null> {
    return await Student.findByIdAndUpdate(id, updateData, { new: true });
  }

  //Delete student by ID
  async deleteStudent(id: string): Promise<boolean> {
    const result = await Student.findByIdAndDelete(id);
    return result !== null;
  }
}
