
import Student from "../../model/student/Student.js";
import bcrypt from "bcrypt";
import generateToken from "../../utils/student_token_generate.js";


/* GET STUDENT PROFILE */
const getStudentProfile = async (req, res) => {
  try {
    const student = await Student.findById(req.user.id)
      .select("-password")
      .populate("event_participated.eventId", "title eventType");

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getStudentProfile
