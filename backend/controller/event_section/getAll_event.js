
import Event from "../../model/event_part/event.js";
import Student from "../../model/student/Student.js";

/* GET ALL EVENTS (with filters) */
const getAllEvents = async (req, res) => {
  try {
    const { eventType, domain, status, month } = req.query;

    let filter = {};
    if (eventType) filter.eventType = eventType;
    if (domain) filter.domain = domain;
    if (status) filter.status = status;
    if (month) filter.tentativeMonth = month;

    const events = await Event.find(filter).sort({ createdAt: -1 });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getAllEvents
