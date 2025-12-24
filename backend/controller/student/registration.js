

import Student from "../../model/student/Student.js";
import bcrypt from "bcrypt";
import generateToken from "../../utils/student_token_generate.js";



/* REGISTER STUDENT */
const registerStudent = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const studentExists = await Student.findOne({ email });
    if (studentExists) {
      return res.status(400).json({ message: "Student already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const student = await Student.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Registration successful",
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

export default registerStudent



