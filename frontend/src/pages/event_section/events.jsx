import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../hooks/api";
import { SITE_CONFIG } from "../../config/site_config";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const res = await API.get("/api/events");
        const fetchedEvents = res.data.events || [];

        // Sort latest events first
        fetchedEvents.sort(
          (a, b) => new Date(b.startDate) - new Date(a.startDate)
        );

        setEvents(fetchedEvents);
      } catch (err) {
        setError("Unable to load events");
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading events...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-20">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <section className="bg-blue-900 text-white py-14 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold">
            {SITE_CONFIG.societyName} Events
          </h1>
          <p className="text-lg opacity-90 mt-1">
            Workshops • Hackathons • Seminars • Community Events
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-6 bg-white">
        <div className="max-w-6xl mx-auto flex justify-center gap-4">
          <Link
            to="/events/upcoming"
            className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
          >
            Upcoming Events
          </Link>
          <Link
            to="/events/featured"
            className="px-6 py-2 border border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50 transition"
          >
            Featured / Annual Events
          </Link>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            All Events
          </h2>

          {events.length === 0 ? (
            <p className="text-center text-gray-600">
              No events available at the moment.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {events.map((event) => (
                <div
                  key={event._id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
                >
                  <div className="h-40 bg-gray-200 overflow-hidden">
                    {event.poster ? (
                      <img
                        src={event.poster}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500">
                        Event Poster
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="font-semibold text-lg">
                      {event.title}
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">
                      {new Date(event.startDate).toDateString()} •{" "}
                      {event.venue}
                    </p>

                    <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                      {event.description}
                    </p>

                    {event.participantsCount !== undefined && (
                      <p className="text-xs text-blue-600 mt-2 font-medium">
                        Participants: {event.participantsCount}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
