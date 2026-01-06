import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../hooks/api";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { SITE_CONFIG } from "../../config/site_config";


const AdminList = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    api
      .get("/api/admin", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      })
      .then((res) => setAdmins(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="ml-64 p-8 w-full">
        <h1 className="text-2xl font-bold mb-2">
          {SITE_CONFIG.societyName} – Admin Management
        </h1>
        <p className="text-gray-600 mb-6">
          Manage administrators for {SITE_CONFIG.collegeName}
        </p>

        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="w-full">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3 font-semibold">Name</th>
                <th className="p-3 font-semibold">Email</th>
                <th className="p-3 font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {admins.length === 0 ? (
                <tr>
                  <td
                    colSpan="3"
                    className="p-6 text-center text-gray-500"
                  >
                    No administrators found.
                  </td>
                </tr>
              ) : (
                admins.map((admin) => (
                  <tr
                    key={admin._id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="p-3">{admin.name}</td>
                    <td className="p-3">{admin.email}</td>
                    <td className="p-3 space-x-4">
                      <Link
                        to={`/admin/${admin._id}`}
                        className="text-blue-600 hover:underline"
                      >
                        View
                      </Link>
                      <Link
                        to={`/admin/edit/${admin._id}`}
                        className="text-green-600 hover:underline"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminList;
