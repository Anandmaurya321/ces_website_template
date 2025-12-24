
import Event from "../../model/event_part/event.js";
import Student from "../../model/student/Student.js";

/* UPDATE EVENT STATUS */
const updateEventStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const event = await Event.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.status(200).json({ message: "Status updated", event });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default updateEventStatus