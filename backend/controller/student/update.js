

import Student from "../../model/student/Student.js";
import bcrypt from "bcrypt";
import generateToken from "../../utils/student_token_generate.js";


/* UPDATE STUDENT */
const updateStudent = async (req, res) => {
  try {
    const updates = req.body;

    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }

    const student = await Student.findByIdAndUpdate(
      req.user.id,
      updates,
      { new: true }
    ).select("-password");

    res.status(200).json({
      message: "Profile updated",
      student,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default updateStudent

