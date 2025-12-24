
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../hooks/api";
import AdminSidebar from "../../components/admin/AdminSidebar";


const EditAdmin = () => {
    const { id } = useParams(); // profile admin id
    const navigate = useNavigate();

    const loggedInAdmin = JSON.parse(localStorage.getItem("adminInfo"));
    const loggedInAdminId = loggedInAdmin?.id;

    const isOwner = loggedInAdminId === id;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        password: "",
        isActive: true,
    });

    useEffect(() => {
        if (!isOwner) {
            navigate("/admin/all");
        }
    }, [isOwner, navigate]);


    // Fetch admin details
    useEffect(() => {
        api
            .get(`/api/admin/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
                },
            })
            .then((res) => {
                const { name, email, role, isActive } = res.data;
                setFormData({
                    name,
                    email,
                    role,
                    password: "",
                    isActive,
                });
            })
            .catch((err) => console.error(err));
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    // ✅ UPDATE (only self)
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isOwner) return;

        try {
            await api.put(`/api/admin/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
                },
            });

            navigate("/admin/dashboard");
        } catch (err) {
            console.error(err);
            alert("Update failed");
        }
    };

    // ❌ DELETE (any admin)
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

    return (
        <div className="flex bg-gray-100 min-h-screen">
            <AdminSidebar />

            <div className="ml-64 p-8 w-full">
                <h1 className="text-2xl font-bold mb-6">Edit Admin Profile</h1>

                {!isOwner && (
                    <p className="text-red-600 mb-4">
                        You can only edit your own profile.
                    </p>
                )}

                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded shadow max-w-lg space-y-4"
                >
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={!isOwner}
                        className="w-full border p-2 rounded"
                    />

                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={!isOwner}
                        className="w-full border p-2 rounded"
                    />

                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        disabled={!isOwner}
                        className="w-full border p-2 rounded"
                    >
                        <option value="admin">Admin</option>
                        <option value="superadmin">Super Admin</option>
                    </select>

                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        disabled={!isOwner}
                        placeholder="New Password (optional)"
                        className="w-full border p-2 rounded"
                    />

                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="isActive"
                            checked={formData.isActive}
                            onChange={handleChange}
                            disabled={!isOwner}
                        />
                        Active
                    </label>

                    <div className="flex justify-between pt-4">
                        {isOwner && (
                            <button className="bg-blue-900 text-white px-4 py-2 rounded">
                                Update Profile
                            </button>
                        )}

                        <button
                            type="button"
                            onClick={handleDelete}
                            className="bg-red-600 text-white px-4 py-2 rounded"
                        >
                            Delete Admin
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditAdmin;

