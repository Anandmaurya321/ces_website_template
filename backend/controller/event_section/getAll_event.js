import Event from "../../model/event_part/event.js";

/* GET ALL EVENTS (with filters) */
const getAllEvents = async (req, res) => {
  try {
    const { eventType, domain, status, month } = req.query;

    const filter = {};
    if (eventType) filter.eventType = eventType;
    if (domain) filter.domain = domain;
    if (status) filter.status = status;
    if (month) filter.tentativeMonth = month;

    const events = await Event.find(filter)
      .populate("winners.student", "name")
      .select("-participants")
      .sort({ createdAt: -1 });

    const formattedEvents = events.map(event => ({
      ...event.toObject(),
      participantsCount: event.participants?.length || 0
    }));

    res.status(200).json({
      events: formattedEvents,
      count: formattedEvents.length,
      valid: 1
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      valid: 0,
      count: 0
    });
  }
};

export default getAllEvents;
