

import Event from "../../model/event_part/event.js";
import Student from "../../model/student/Student.js";

/* REMOVE STUDENT FROM EVENT */
const removeParticipant = async (req, res) => {
  try {
    const { studentId } = req.body;

    await Event.findByIdAndUpdate(req.params.id, {
      $pull: { participants: studentId },
    });

    await Student.findByIdAndUpdate(studentId, {
      $pull: { event_participated: { eventId: req.params.id } },
    });

    res.status(200).json({ message: "Participant removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default removeParticipant
