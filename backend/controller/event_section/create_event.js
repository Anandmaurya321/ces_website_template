
import Event from "../../model/event_part/event.js";
import Student from "../../model/student/Student.js";

/* CREATE EVENT */
const createEvent = async (req, res) => {
  try {
    console.log("create event is called here");

    const event = await Event.create({
      ...req.body,
      poster: req.file?.path || "",   // ✅ THIS LINE FIXES EVERYTHING
      tags: req.body.tags ? JSON.parse(req.body.tags) : [],
    });

    res.status(201).json({
      message: "Event created",
      event,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


export default createEvent

