
import React from "react";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-blue-900 text-white py-14 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">CES Events</h1>
          <p className="text-lg opacity-90">
            Workshops • Hackathons • Seminars • Fest Events
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">
          <Link
            to="/events/upcoming"
            className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
          >
            Upcoming Events
          </Link>
          <Link
            to="/events/annual-fest"
            className="px-6 py-2 border border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50 transition"
          >
            Annual Fest Events
          </Link>
        </div>
      </section>

      {/* All Events */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            All Events
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((event) => (
              <div
                key={event}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="h-40 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Event Poster</span>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-1">
                    Event Title
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Date • Venue
                  </p>
                  <p className="text-sm text-gray-600">
                    Short description of the event conducted by CES.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Events;
