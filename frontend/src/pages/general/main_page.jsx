import React from "react";
import { SITE_CONFIG } from "../../config/site_config";


const Home_page = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {SITE_CONFIG.societyName}
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            {SITE_CONFIG.collegeName}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">
            About the Society
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {SITE_CONFIG.societyName} is a student-driven academic and technical
            society focused on enhancing knowledge, skills, and innovation among
            students. The society actively organizes workshops, seminars, coding
            events, competitions, and collaborative activities to promote
            professional growth and peer learning.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Society Leadership
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Faculty Advisor */}
            <div className="bg-gray-100 rounded-xl p-6 shadow-sm text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-300" />
              <h3 className="text-xl font-semibold">Faculty Advisor</h3>
              <p className="text-gray-600">Dr. [Advisor Name]</p>
              <p className="text-sm text-gray-500 mt-2">
                Department / Faculty
              </p>
            </div>

            {/* President */}
            <div className="bg-gray-100 rounded-xl p-6 shadow-sm text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-300" />
              <h3 className="text-xl font-semibold">President</h3>
              <p className="text-gray-600">[Student Name]</p>
              <p className="text-sm text-gray-500 mt-2">
                Final Year Student
              </p>
            </div>

            {/* Vice President */}
            <div className="bg-gray-100 rounded-xl p-6 shadow-sm text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-300" />
              <h3 className="text-xl font-semibold">Vice President</h3>
              <p className="text-gray-600">[Student Name]</p>
              <p className="text-sm text-gray-500 mt-2">
                Pre-Final Year Student
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Archives / Activities */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">
            Society Activities & Archives
          </h2>
          <p className="text-gray-700 mb-6">
            Explore past events, workshops, hackathons, seminars, and technical
            initiatives conducted by the society over the years.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg">Recent Year</h4>
              <p className="text-sm text-gray-600">
                Workshops, competitions, and expert sessions.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg">Previous Year</h4>
              <p className="text-sm text-gray-600">
                Hackathons, exhibitions, and student-led projects.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg">Foundation Years</h4>
              <p className="text-sm text-gray-600">
                Establishment activities and early initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 text-center">
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} {SITE_CONFIG.societyName} |{" "}
          {SITE_CONFIG.collegeName}
        </p>
      </footer>
    </div>
  );
};

export default Home_page;
