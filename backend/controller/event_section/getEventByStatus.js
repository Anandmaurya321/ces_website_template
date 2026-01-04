import Event from "../../model/event_part/event.js";

const FindEventByStatus = async (req, res) => {
  
    const { status } = req.query; // as req.body is undefined in get api

  try {
    const events = await Event.find({ status })
      .populate("winners.student", "name")
      .select("-participants");

    if (events.length === 0) {
      return res.json({
        events: [],
        count: 0,
        valid: 1
      });
    }

    // Add participantsCount safely
    const formattedEvents = events.map(event => ({
      ...event.toObject(),
      participantsCount: event.participants?.length || 0
    }));

    res.json({
      events: formattedEvents,
      count: formattedEvents.length,
      valid: 1
    });

    console.log("Event status search response sent successfully");
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Something went wrong",
      valid: 0,
      count: 0
    });
  }
};

export default FindEventByStatus;
