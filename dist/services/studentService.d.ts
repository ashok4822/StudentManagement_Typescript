import { StudentRequest, StudentResponse } from "../models/requestResponse";
export declare class StudentService {
    getAllStudents(): Promise<StudentResponse[]>;
    getStudentById(id: string): Promise<StudentResponse | null>;
    createStudent(studentData: Partial<StudentRequest>): Promise<StudentResponse>;
    updateStudent(id: string, updateData: Partial<StudentRequest>): Promise<StudentResponse | null>;
    deleteStudent(id: string): Promise<boolean>;
}
//# sourceMappingURL=studentService.d.ts.map