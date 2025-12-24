
import React from "react";
import AdminSidebar from "../../components/admin/AdminSidebar"

const AdminEvents = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <AdminSidebar />

      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold mb-6">Manage Events</h1>

        <button className="mb-6 px-5 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800">
          + Add New Event
        </button>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Event Name</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4">Coding Contest</td>
                <td className="p-4">12 Feb 2025</td>
                <td className="p-4">Workshop</td>
                <td className="p-4 space-x-3">
                  <button className="text-blue-900 font-medium">Edit</button>
                  <button className="text-red-600 font-medium">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminEvents;
