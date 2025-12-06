"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const studentController_1 = require("../controllers/studentController");
const studentService_1 = require("../services/studentService");
//Create an express router
const router = express_1.default.Router();
//Create instances
const studentService = new studentService_1.StudentService();
const studentController = new studentController_1.StudentController(studentService);
//Routes
router.get("/", (req, res) => studentController.getAllStudents(req, res));
router.get("/:id", (req, res) => studentController.getStudentById(req, res));
router.post("/", (req, res) => studentController.createStudent(req, res));
router.put("/:id", (req, res) => studentController.updateStudent(req, res));
router.delete("/:id", (req, res) => studentController.deleteStudent(req, res));
exports.default = router;
//# sourceMappingURL=studentRoutes.js.map