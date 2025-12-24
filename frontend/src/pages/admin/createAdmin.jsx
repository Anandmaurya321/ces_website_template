
import { useState } from "react";
import api from "../../hooks/api";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { useNavigate } from "react-router-dom";

const CreateAdmin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(
        "/api/admin",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        }
      );

      console.log(res.data);
      navigate("/admin/all");

    } catch (err) {
      console.error("CREATE ADMIN ERROR:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Failed to create admin");
    }
  };


  return (
    <div className="flex">
      <AdminSidebar />

      <div className="ml-64 p-8 w-full">
        <h1 className="text-2xl font-bold mb-4">Create Admin</h1>

        <form onSubmit={submit} className="space-y-4 max-w-md">
          <input
            placeholder="Name"
            className="w-full border p-2"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Email"
            className="w-full border p-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-blue-900 text-white px-4 py-2 rounded">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAdmin;

