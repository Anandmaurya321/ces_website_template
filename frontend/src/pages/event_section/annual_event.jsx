import React, { useEffect, useState } from "react";
import API from "../../hooks/api";

const AnnualFest = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadAnnualFestEvents = async () => {
      try {
        const res = await API.get("/api/events", {
          params: {
            eventType: "annual_fest"
          }
        });

        const festEvents = res.data.events || res.data;

        // Sort latest fest first
        festEvents.sort(
          (a, b) => new Date(b.startDate) - new Date(a.startDate)
        );

        setEvents(festEvents);
      } catch (err) {
        setError("Unable to load annual fest events");
      } finally {
        setLoading(false);
      }
    };

    loadAnnualFestEvents();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading fest events...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 py-20">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-14 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">
            Annual Fest Events
          </h1>
          <p className="text-lg opacity-90">
            Flagship technical events of the university fest
          </p>
        </div>
      </section>

      {/* Fest Events */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {events.length === 0 ? (
            <p className="text-center text-gray-600">
              No annual fest events available
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {events.map(event => (
                <div
                  key={event._id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
                >
                  <div className="h-44 bg-gray-200 overflow-hidden">
                    {event.poster ? (
                      <img
                        src={event.poster}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500">
                        Fest Poster
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="font-semibold text-lg">
                      {event.title}
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">
                      {new Date(event.startDate).getFullYear()} • {event.venue}
                    </p>

                    <p className="text-sm text-gray-700 mt-2 line-clamp-3">
                      {event.description}
                    </p>
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

export default AnnualFest;
