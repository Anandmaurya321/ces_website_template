import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../hooks/api";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("/api/admin/login", {
        email,
        password,
      });

      const { token, admin } = response.data;

      // Save token & admin info
      localStorage.setItem("adminToken", token);
      localStorage.setItem("adminInfo", JSON.stringify(admin));

      // Navigate to dashboard
      navigate("/admin/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-900">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-900">
            Admin Login
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Computer Engineering Society • MMMUT
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-600 text-sm text-center mb-4">
            {error}
          </p>
        )}

        {/* Login Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Admin Email / ID
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@mmmut.ac.in"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition font-medium disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login as Admin"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-6">
          Authorized personnel only. Unauthorized access is prohibited.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
