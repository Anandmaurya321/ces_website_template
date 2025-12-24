
import React from "react";

const OurCommunity = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* Header */}
      <section className="bg-blue-900 text-white py-14 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-3">Our Community</h1>
          <p className="text-lg opacity-90">
            Computer Engineering Society • MMMUT
          </p>
        </div>
      </section>

      {/* About Community */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">
            About the CES Community
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The CES Community at Madan Mohan Malaviya University of Technology is a
            vibrant network of students, alumni, and faculty members. Our
            community fosters collaboration, technical excellence, leadership,
            and innovation through continuous learning and peer engagement.
          </p>
        </div>
      </section>

      {/* Current Members */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Current Members
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((member) => (
              <div
                key={member}
                className="bg-gray-100 rounded-xl p-5 text-center shadow-sm"
              >
                <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-gray-300" />
                <h3 className="font-semibold text-lg">Member Name</h3>
                <p className="text-sm text-gray-600">
                  Year • Branch
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Our Alumni
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((alumni) => (
              <div
                key={alumni}
                className="bg-white rounded-xl p-6 shadow-sm text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-300" />
                <h3 className="font-semibold text-lg">Alumni Name</h3>
                <p className="text-sm text-gray-600">
                  Batch • Company / Higher Studies
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Winners & Achievements */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Winners & Achievements
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((winner) => (
              <div
                key={winner}
                className="rounded-lg overflow-hidden shadow-sm bg-gray-100"
              >
                <div className="h-40 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Poster Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">
                    Competition / Event Name
                  </h3>
                  <p className="text-sm text-gray-600">
                    Winner • Year
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Values */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Our Community Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Collaboration</h3>
              <p className="text-sm text-gray-600">
                Working together to solve problems and build impactful solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">
                Encouraging creativity and technological advancement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Leadership</h3>
              <p className="text-sm text-gray-600">
                Developing responsible and confident future engineers.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OurCommunity;
