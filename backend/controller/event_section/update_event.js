
import Event from "../../model/event_part/event.js";
import Student from "../../model/student/Student.js";

/* UPDATE EVENT */
const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!event) return res.status(404).json({ message: "Event not found" });

    res.status(200).json({ message: "Event updated", event });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default updateEvent