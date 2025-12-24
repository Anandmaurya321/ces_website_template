
import express from "express";
import registerStudent from '../controller/student/registration.js'
import loginStudent from '../controller/student/login.js'
import getStudentProfile from '../controller/student/getProfile.js'
import getAllStudents from '../controller/student/getAllStudent.js'
import updateStudent from '../controller/student/update.js'
import deleteStudent from '../controller/student/delete.js'
import authmiddleware from '../middleware/student_authmiddleware.js'

const router = express.Router();

/* Public */
router.post("/register", registerStudent);
router.post("/login", loginStudent);

/* Protected (JWT middleware to be added) */
router.get("/profile", authmiddleware, getStudentProfile);
router.put("/profile",authmiddleware, updateStudent);

/* Admin */
router.get("/", getAllStudents);
router.delete("/:id", deleteStudent);

export default router;


