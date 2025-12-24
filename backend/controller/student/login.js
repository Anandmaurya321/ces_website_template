
import Student from "../../model/student/Student.js";
import bcrypt from "bcrypt";
import generateToken from "../../utils/student_token_generate.js";

/* LOGIN STUDENT */
const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;

    const student = await Student.findOne({ email });
    if (!student)
      return res.status(404).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    res.status(200).json({
      message: "Login successful",
      token: generateToken(student._id),
      student: {
        id: student._id,
        name: student.name,
        email: student.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default loginStudent
