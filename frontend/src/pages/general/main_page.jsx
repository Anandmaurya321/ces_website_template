import React from "react";

const Home_page = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Computer Engineering Society
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Madan Mohan Malaviya University of Technology
          </p>
        </div>
      </section>

      {/* About CES */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">About CES</h2>
          <p className="text-gray-700 leading-relaxed">
            The Computer Engineering Society (CES) is a student-driven technical
            society dedicated to enhancing knowledge, skills, and innovation in
            the field of computer engineering. CES organizes workshops, coding
            events, seminars, and technical competitions to foster professional
            and academic growth among students.
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
              <p className="text-gray-600">Dr. [Name]</p>
              <p className="text-sm text-gray-500 mt-2">
                Department of Computer Engineering
              </p>
            </div>

            {/* President */}
            <div className="bg-gray-100 rounded-xl p-6 shadow-sm text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-300" />
              <h3 className="text-xl font-semibold">President</h3>
              <p className="text-gray-600">[Student Name]</p>
              <p className="text-sm text-gray-500 mt-2">
                Final Year, Computer Engineering
              </p>
            </div>

            {/* Vice President */}
            <div className="bg-gray-100 rounded-xl p-6 shadow-sm text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-300" />
              <h3 className="text-xl font-semibold">Vice President</h3>
              <p className="text-gray-600">[Student Name]</p>
              <p className="text-sm text-gray-500 mt-2">
                Third Year, Computer Engineering
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CES Archives */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">CES Archives</h2>
          <p className="text-gray-700 mb-6">
            Explore our past events, workshops, hackathons, and technical
            activities conducted by CES over the years.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg">2023–2024</h4>
              <p className="text-sm text-gray-600">
                Coding contests, expert talks, and workshops.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg">2022–2023</h4>
              <p className="text-sm text-gray-600">
                Hackathons, project exhibitions, and seminars.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg">Earlier Years</h4>
              <p className="text-sm text-gray-600">
                Foundation events and society establishment activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 text-center">
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Computer Engineering Society | MMMUT
        </p>
      </footer>

    </div>
  );
};

export default Home_page;
