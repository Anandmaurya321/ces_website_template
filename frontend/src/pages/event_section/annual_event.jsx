
import React from "react";

const AnnualFest = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <section className="bg-blue-900 text-white py-14 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Annual Fest Events</h1>
          <p className="text-lg opacity-90">
            Technical events conducted during university fest
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((event) => (
            <div
              key={event}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="h-40 bg-gray-300 flex items-center justify-center">
                Fest Poster
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg">
                  Fest Event Name
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Fest Year
                </p>
                <p className="text-sm text-gray-700">
                  Description of the annual fest event and participation details.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AnnualFest;
