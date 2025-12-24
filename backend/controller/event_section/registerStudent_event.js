
import Event from "../../model/event_part/event.js";
import Student from "../../model/student/Student.js";

/* REGISTER STUDENT FOR EVENT */
const registerForEvent = async (req, res) => {
  try {
    const { studentId } = req.body;
    const event = await Event.findById(req.params.id);
    const student = await Student.findById(studentId);

    if (!event || !student)
      return res.status(404).json({ message: "Event or Student not found" });

    if (event.participants.includes(studentId))
      return res.status(400).json({ message: "Already registered" });

    event.participants.push(studentId);
    student.event_participated.push({
      eventName: event.title,
      eventId: event._id,
    });

    await event.save();
    await student.save();

    res.status(200).json({ message: "Registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default registerForEvent