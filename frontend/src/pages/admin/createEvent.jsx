import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../hooks/api";
import AdminSidebar from "../../components/admin/AdminSidebar";

const CreateEvent = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    eventType: "",
    domain: "",
    tentativeMonth: "",
    startDate: "",
    endDate: "",
    venue: "",
    poster: "",
    registrationRequired: true,
    registrationDeadline: "",
    maxParticipants: "",
    status: "upcoming",
    tags: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    await api.post(
      "/api/events",
      {
        ...formData,
        tags: formData.tags
          ? formData.tags.split(",").map(t => t.trim().toLowerCase())
          : [],
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      }
    );

    navigate("/admin/events");
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <AdminSidebar />

      <div className="ml-64 p-8 w-full">
        <h1 className="text-2xl font-bold mb-6">Create Event</h1>

        <form
          onSubmit={submit}
          className="bg-white p-6 rounded shadow max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Title */}
          <input
            name="title"
            placeholder="Event Title"
            required
            onChange={handleChange}
          />

          {/* Event Type */}
          <select name="eventType" required onChange={handleChange}>
            <option value="">Select Event Type</option>
            <option value="annual_fest">Annual Fest</option>
            <option value="workshop">Workshop</option>
            <option value="seminar">Seminar</option>
            <option value="hackathon">Hackathon</option>
            <option value="competition">Competition</option>
            <option value="fun_event">Fun Event</option>
            <option value="other">Other</option>
          </select>

          {/* Domain */}
          <select name="domain" required onChange={handleChange}>
            <option value="">Select Domain</option>
            <option value="programming">Programming</option>
            <option value="cybersecurity">Cybersecurity</option>
            <option value="development">Development</option>
            <option value="ai_ml">AI / ML</option>
            <option value="data_science">Data Science</option>
            <option value="blockchain">Blockchain</option>
            <option value="robotics">Robotics</option>
            <option value="fun">Fun</option>
            <option value="general">General</option>
          </select>

          {/* Tentative Month */}
          <select name="tentativeMonth" required onChange={handleChange}>
            <option value="">Select Month</option>
            {[
              "January","February","March","April","May","June",
              "July","August","September","October","November","December",
            ].map(month => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>

          {/* Dates */}
          <input type="date" name="startDate" onChange={handleChange} />
          <input type="date" name="endDate" onChange={handleChange} />

          {/* Venue */}
          <input
            name="venue"
            placeholder="Venue"
            onChange={handleChange}
          />

          {/* Poster */}
          <input
            name="poster"
            placeholder="Poster URL"
            onChange={handleChange}
          />

          {/* Registration Required */}
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="registrationRequired"
              checked={formData.registrationRequired}
              onChange={handleChange}
            />
            Registration Required
          </label>

          {/* Registration Deadline */}
          <input
            type="date"
            name="registrationDeadline"
            onChange={handleChange}
          />

          {/* Max Participants */}
          <input
            type="number"
            name="maxParticipants"
            placeholder="Max Participants"
            onChange={handleChange}
          />

          {/* Status */}
          <select name="status" onChange={handleChange}>
            <option value="upcoming">Upcoming</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>

          {/* Description */}
          <textarea
            name="description"
            placeholder="Event Description"
            className="md:col-span-2"
            required
            onChange={handleChange}
          />

          {/* Tags */}
          <input
            name="tags"
            placeholder="Tags (comma separated)"
            className="md:col-span-2"
            onChange={handleChange}
          />

          <button className="bg-blue-900 text-white py-2 rounded md:col-span-2">
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
