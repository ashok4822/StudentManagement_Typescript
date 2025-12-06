import { Request, Response } from "express";
import { StudentService } from "../services/studentService";
import {
  StudentRequest,
  StudentResponse,
  ApiResponse,
} from "../models/requestResponse";

//Controller class = handles incoming requests and responses
export class StudentController {
  private studentService: StudentService;

  //Dependency Injection - service injected via constructor
  constructor(studentService: StudentService) {
    this.studentService = studentService;
  }

  //Get all students
  async getAllStudents(req: Request, res: Response): Promise<void> {
    try {
      const students = await this.studentService.getAllStudents();

      const response: ApiResponse<StudentResponse[]> = {
        success: true,
        message: "Students fetched successfully",
        data: students,
      };
      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse<null> = {
        success: false,
        message: "Failed to fetch students",
        error,
      };
      res.status(500).json(response);
    }
  }

  //Get student by ID
  async getStudentById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      if (!id) {
        res
          .status(400)
          .json({ success: false, messge: "Student ID is required" });
        return;
      }
      const student = await this.studentService.getStudentById(id);
      if (!student) {
        res.status(404).json({ success: false, message: "Student not found" });
        return;
      }

      const response: ApiResponse<StudentResponse> = {
        success: true,
        message: "Student fetched successfully",
        data: student,
      };

      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse<null> = {
        success: false,
        message: "Failed to fetch student",
        error,
      };
      res.status(500).json(response);
    }
  }

  //Create new student
  async createStudent(req: Request, res: Response): Promise<void> {
    try {
      const student = await this.studentService.createStudent(req.body);

      const response: ApiResponse<StudentResponse> = {
        success: true,
        message: "Student created successfully",
        data: student,
      };

      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse<null> = {
        success: false,
        message: "Failed to create student",
        error,
      };
      res.status(500).json(response);
    }
  }

  //Update student
  async updateStudent(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      if (!id) {
        res
          .status(400)
          .json({ success: false, message: "Student ID is required" });
        return;
      }
      const student = await this.studentService.updateStudent(id, req.body);
      if (!student) {
        res.status(404).json({ success: false, message: "Student not found" });
        return;
      }

      const response: ApiResponse<StudentResponse> = {
        success: true,
        message: "Student updated successfully",
        data: student,
      };

      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse<null> = {
        success: false,
        message: "Failed to update student",
        error,
      };
      res.status(500).json(response);
    }
  }

  //Delete student
  async deleteStudent(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      if (!id) {
        res
          .status(400)
          .json({ success: false, message: "Student ID is required" });
        return;
      }

      const isDeleted = await this.studentService.deleteStudent(id);

      if (!isDeleted) {
        res.status(404).json({ status: false, message: "Student not found" });
        return;
      }

      const response: ApiResponse<null> = {
        success: true,
        message: "Student deleted successfully",
      };

      res.status(200).json(response);
    } catch (error) {
      const response: ApiResponse<null> = {
        success: false,
        message: "Failed to delete student",
        error,
      };
      res.status(500).json(response);
    }
  }
}
