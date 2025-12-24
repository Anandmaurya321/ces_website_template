
import Event from "../../model/event_part/event.js";
import Student from "../../model/student/Student.js";

/* DELETE EVENT */
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    res.status(200).json({ message: "Event deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default deleteEvent