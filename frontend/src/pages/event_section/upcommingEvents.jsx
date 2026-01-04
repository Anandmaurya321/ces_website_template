import React, { useEffect, useState } from "react";
import API from "../../hooks/api";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadEvents = async () => {
    
    try {
      const res = await API.get("/api/events", {
        params:{
         status: "upcoming" 
        }
      });

      setEvents(res.data.events);
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "Failed to load events");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  if (isLoading) {
    return <div className="text-center py-20">Loading events...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 py-20">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-900 text-white py-14 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Upcoming Events</h1>
          <p className="text-lg opacity-90">
            Stay updated with future CES events
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {events.length === 0 ? (
            <p className="text-center text-gray-600">No upcoming events</p>
          ) : (
            events.map((event) => (
              <div
                key={event._id}
                className="bg-white p-6 rounded-xl shadow-sm flex flex-col md:flex-row gap-6"
              >
                <div className="w-full md:w-40 h-32 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
                  {event.poster ? (
                    <img
                      src={event.poster}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    "Poster"
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    {event.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-2">
                    {new Date(event.startDate).toDateString()} • {event.venue}
                  </p>

                  <p className="text-gray-700 mb-2">
                    {event.description}
                  </p>

                  <p className="text-sm text-blue-600 font-medium">
                    Participants: {event.participantsCount}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default UpcomingEvents;
