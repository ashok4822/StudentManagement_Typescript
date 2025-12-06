import express from "express";
import { StudentController } from "../controllers/studentController";
import { StudentService } from "../services/studentService";

//Create an express router
const router = express.Router();

//Create instances
const studentService = new StudentService();
const studentController = new StudentController(studentService);

//Routes
router.get("/", (req, res) => studentController.getAllStudents(req, res));
router.get("/:id", (req, res) => studentController.getStudentById(req, res));
router.post("/", (req, res) => studentController.createStudent(req, res));
router.put("/:id", (req, res) => studentController.updateStudent(req, res));
router.delete("/:id", (req, res) => studentController.deleteStudent(req, res));

export default router;
