import { Request, Response } from "express";
import { StudentService } from "../services/studentService";
export declare class StudentController {
    private studentService;
    constructor(studentService: StudentService);
    getAllStudents(req: Request, res: Response): Promise<void>;
    getStudentById(req: Request, res: Response): Promise<void>;
    createStudent(req: Request, res: Response): Promise<void>;
    updateStudent(req: Request, res: Response): Promise<void>;
    deleteStudent(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=studentController.d.ts.map