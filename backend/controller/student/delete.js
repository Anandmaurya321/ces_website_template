
import Student from "../../model/student/Student.js";
import bcrypt from "bcrypt";
import generateToken from "../../utils/student_token_generate.js";

/* DELETE STUDENT (ADMIN) */
const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student)
      return res.status(404).json({ message: "Student not found" });

    res.status(200).json({ message: "Student deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default deleteStudent



