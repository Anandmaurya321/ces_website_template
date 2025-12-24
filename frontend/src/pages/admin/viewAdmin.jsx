
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../hooks/api";
import AdminSidebar from "../../components/admin/AdminSidebar";

const ViewAdmin = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const loggedInAdmin = JSON.parse(localStorage.getItem("adminInfo"));
  const loggedInAdminId = loggedInAdmin?.id;

  const isOwner = loggedInAdminId === id;

  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch admin data
  useEffect(() => {
    api
      .get(`/api/admin/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      })
      .then((res) => {
        const { name, email, role, isActive } = res.data;
        setAdmin({ name, email, role, isActive });
      })
      .catch((err) => {
        console.error(err);
        navigate("/admin/all");
      })
      .finally(() => setLoading(false));
  }, [id, navigate]);

  // 🔥 Delete admin (any admin allowed)
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this admin?")) return;

    try {
      await api.delete(`/api/admin/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });

      navigate("/admin/all");
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  if (loading) {
    return (
      <div className="flex">
        <AdminSidebar />
        <div className="ml-64 p-8">Loading...</div>
      </div>
    );
  }

  if (!admin) return null;

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <AdminSidebar />

      <div className="ml-64 p-8 w-full">
        <h1 className="text-2xl font-bold mb-6">Admin Profile</h1>

        <div className="bg-white rounded shadow p-6 max-w-lg space-y-4">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-medium">{admin.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{admin.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Role</p>
            <p className="font-medium capitalize">{admin.role}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Status</p>
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm ${
                admin.isActive
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {admin.isActive ? "Active" : "Inactive"}
            </span>
          </div>

          <div className="flex justify-between pt-6">
            {isOwner && (
              <button
                onClick={() => navigate(`/admin/edit/${id}`)}
                className="bg-blue-900 text-white px-4 py-2 rounded"
              >
                Edit Profile
              </button>
            )}

            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Delete Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAdmin;
