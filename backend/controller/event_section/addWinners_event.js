
import Event from "../../model/event_part/event.js";
import Student from "../../model/student/Student.js";

/* ADD EVENT WINNERS */
const addWinners = async (req, res) => {
  try {
    const { winners } = req.body;

    const event = await Event.findByIdAndUpdate(
      req.params.id,
      { winners },
      { new: true }
    );

    res.status(200).json({ message: "Winners added", event });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default addWinners
