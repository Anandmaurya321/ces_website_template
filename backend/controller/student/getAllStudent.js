
import Student from "../../model/student/Student.js";
import bcrypt from "bcrypt";
import generateToken from "../../utils/student_token_generate.js";


/* GET ALL STUDENTS (ADMIN) */
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().select("-password");
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getAllStudents

