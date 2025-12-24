
import { useEffect, useState } from "react";
import api from "../../hooks/api";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { Link } from "react-router-dom";

const AdminList = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    api.get("/api/admin", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
    })
    .then(res => setAdmins(res.data))
    .catch(err => console.error(err));
  }, []);

  return (
    <div className="flex">
      <AdminSidebar />

      <div className="ml-64 p-8 w-full">
        <h1 className="text-2xl font-bold mb-4">All Admins</h1>

        <table className="w-full bg-white shadow rounded">
          <thead>
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.map(admin => (
              <tr key={admin._id} className="border-t">
                <td className="p-3">{admin.name}</td>
                <td className="p-3">{admin.email}</td>
                <td className="p-3 space-x-2">
                  <Link to={`/admin/${admin._id}`} className="text-blue-600">
                    View
                  </Link>
                  <Link to={`/admin/edit/${admin._id}`} className="text-green-600">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminList;
