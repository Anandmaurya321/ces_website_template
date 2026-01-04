import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../hooks/api";
import AdminSidebar from "../../components/admin/AdminSidebar";

const ManageEvents = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const res = await api.get("/api/events");
      setEvents(res.data.events || []); // ✅ FIX
    } catch (err) {
      console.error("Failed to fetch events", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const deleteEvent = async (id) => {
    if (!window.confirm("Delete this event?")) return;

    try {
      await api.delete(`/api/events/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });
      fetchEvents();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <AdminSidebar />

      <div className="ml-64 p-8 w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Manage Events</h1>
          <button
            onClick={() => navigate("/admin/events/create")}
            className="bg-blue-900 text-white px-4 py-2 rounded"
          >
            + Create Event
          </button>
        </div>

        {loading ? (
          <p className="text-center py-10">Loading events...</p>
        ) : events.length === 0 ? (
          <p className="text-center py-10 text-gray-600">
            No events found
          </p>
        ) : (
          <div className="bg-white rounded shadow divide-y">
            {events.map((event) => (
              <div
                key={event._id}
                className="p-4 flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{event.title}</p>
                  <p className="text-sm text-gray-500 capitalize">
                    {event.status}
                  </p>
                </div>

                <div className="space-x-3">
                  <button
                    onClick={() => navigate(`/admin/events/${event._id}`)}
                    className="text-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteEvent(event._id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageEvents;
