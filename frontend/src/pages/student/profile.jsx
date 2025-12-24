import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../hooks/api";

const Profile = () => {
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/api/student/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("studentToken")}`,
        },
      })
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Session expired. Please login again.");
        localStorage.removeItem("studentToken");
        localStorage.removeItem("studentInfo");
        navigate("/login");
      })
      .finally(() => setLoading(false));
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading profile...
      </div>
    );
  }

  if (!student) return null;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          My Profile
        </h2>

        {error && (
          <p className="text-red-600 text-sm text-center mb-4">
            {error}
          </p>
        )}

        <div className="space-y-4 text-gray-700">
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-medium">{student.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{student.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Enrollment Number</p>
            <p className="font-medium">{student.enrollment}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Role</p>
            <p className="font-medium capitalize">{student.role || "Student"}</p>
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <button
            onClick={() => navigate("/profile/edit")}
            className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            Edit Profile
          </button>

          <button
            onClick={() => {
              localStorage.removeItem("studentToken");
              localStorage.removeItem("studentInfo");
              navigate("/login");
            }}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
