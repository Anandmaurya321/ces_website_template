import React from "react";

const UpcomingEvents = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <section className="bg-blue-900 text-white py-14 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Upcoming Events</h1>
          <p className="text-lg opacity-90">
            Stay updated with future CES events
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {[1, 2, 3].map((event) => (
            <div
              key={event}
              className="bg-white p-6 rounded-xl shadow-sm flex flex-col md:flex-row gap-6"
            >
              <div className="w-full md:w-40 h-32 bg-gray-300 flex items-center justify-center rounded-lg">
                Poster
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Upcoming Event Title
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Date • Time • Venue
                </p>
                <p className="text-gray-700">
                  Brief description of the upcoming event, registration details,
                  and eligibility.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default UpcomingEvents;
