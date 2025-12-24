
import React from "react";
import AdminSidebar from "../../components/admin/AdminSidebar"

const AdminMembers = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <AdminSidebar />

      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold mb-6">Members Management</h1>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Role</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4">Student Name</td>
                <td className="p-4">student@mmmut.ac.in</td>
                <td className="p-4">Member</td>
                <td className="p-4">
                  <button className="text-red-600 font-medium">
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminMembers;
