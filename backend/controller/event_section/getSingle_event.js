
import Event from "../../model/event_part/event.js";
import Student from "../../model/student/Student.js";

/* GET SINGLE EVENT */
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
      .populate("participants", "name email")
      .populate("winners.student", "name");

    if (!event) return res.status(404).json({ message: "Event not found" });

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getEventById