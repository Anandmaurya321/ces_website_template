import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import API from "../../hooks/api";

const EditProfile = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (!state?.student) {
      // fallback safety
      navigate("/profile");
      return;
    }

    setFormData({
      name: state.student.name || "",
      email: state.student.email || "",
      phone: state.student.phone || "",
      password: "",
    });
  }, [state, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const payload = { ...formData };
      if (!payload.password) delete payload.password;

      await API.put("/api/student/update", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("studentToken")}`,
        },
      });

      navigate("/profile");
    } catch (err) {
      setError("Profile update failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-lg rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Edit Profile
        </h1>

        {error && (
          <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
        )}

        <form onSubmit={submit} className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full border px-3 py-2 rounded"
          />

          <input
            name="email"
            value={formData.email}
            disabled
            className="w-full border px-3 py-2 rounded bg-gray-100"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full border px-3 py-2 rounded"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="New Password (optional)"
            className="w-full border px-3 py-2 rounded"
          />

          <button className="w-full bg-blue-900 text-white py-2 rounded">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
