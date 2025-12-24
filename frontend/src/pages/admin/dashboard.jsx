
import React from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";

const AdminDashboard = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      
      <AdminSidebar />

      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Admin Dashboard
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-sm text-gray-500">Total Members</h3>
            <p className="text-3xl font-bold text-blue-900">320</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-sm text-gray-500">Alumni</h3>
            <p className="text-3xl font-bold text-blue-900">120</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-sm text-gray-500">Events Conducted</h3>
            <p className="text-3xl font-bold text-blue-900">45</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-sm text-gray-500">Upcoming Events</h3>
            <p className="text-3xl font-bold text-blue-900">3</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>✔ New event added: Hackathon 2025</li>
            <li>✔ New member registered</li>
            <li>✔ Alumni profile updated</li>
            <li>✔ Annual fest events published</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
