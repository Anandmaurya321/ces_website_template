import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../hooks/api";
import AdminSidebar from "../../components/admin/AdminSidebar";

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api
      .get(`/api/events/${id}`)
      .then((res) => setEvent(res.data))
      .catch(() => navigate("/admin/events"));
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEvent({
      ...event,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const updateEvent = async () => {
    try {
      setLoading(true);

      await api.put(`/api/events/${id}`, event, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });

      navigate("/admin/events");
    } catch (err) {
      alert("Failed to update event");
    } finally {
      setLoading(false);
    }
  };

  if (!event) return null;

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <AdminSidebar />

      <div className="ml-64 p-8 w-full">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Edit Event</h1>
          <p className="text-sm text-gray-500">
            Update event details and status
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 max-w-4xl">
          {/* BASIC INFO */}
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Basic Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium mb-1">
                Event Title
              </label>
              <input
                name="title"
                value={event.title}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Event Type
              </label>
              <select
                name="eventType"
                value={event.eventType}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              >
                <option value="annual_fest">Annual Fest</option>
                <option value="workshop">Workshop</option>
                <option value="seminar">Seminar</option>
                <option value="hackathon">Hackathon</option>
                <option value="competition">Competition</option>
                <option value="fun_event">Fun Event</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={event.description}
              onChange={handleChange}
              rows="4"
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          {/* SCHEDULE */}
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Schedule & Venue
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium mb-1">
                Tentative Month
              </label>
              <select
                name="tentativeMonth"
                value={event.tentativeMonth}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              >
                {[
                  "January","February","March","April","May","June",
                  "July","August","September","October","November","December",
                ].map(month => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                value={event.startDate?.slice(0, 10) || ""}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                value={event.endDate?.slice(0, 10) || ""}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
          </div>

          {/* STATUS & VENUE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium mb-1">
                Venue
              </label>
              <input
                name="venue"
                value={event.venue || ""}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Status
              </label>
              <select
                name="status"
                value={event.status}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              >
                <option value="upcoming">Upcoming</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex justify-end gap-4">
            <button
              onClick={() => navigate("/admin/events")}
              className="px-6 py-2 border rounded-lg"
            >
              Cancel
            </button>

            <button
              onClick={updateEvent}
              disabled={loading}
              className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 disabled:opacity-60"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEvent;
 
