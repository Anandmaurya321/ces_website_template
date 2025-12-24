import { Link, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminInfo");
    navigate("/admin");
  };

  return (
    <div className="w-64 bg-blue-900 text-white min-h-screen fixed p-6">
      <h2 className="text-xl font-bold mb-8">Admin Panel</h2>

      <nav className="space-y-4">
        <Link to="/admin/dashboard" className="block hover:text-gray-300">
          Dashboard
        </Link>

        <Link to="/admin/all" className="block hover:text-gray-300">
          All Admins
        </Link>

        <Link to="/admin/create" className="block hover:text-gray-300">
          Create Admin
        </Link>

        <Link to="/admin/events" className="block hover:text-gray-300">
          Manage Event
        </Link>

        <button
          onClick={logout}
          className="mt-6 w-full bg-red-600 py-2 rounded"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default AdminSidebar;
