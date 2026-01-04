import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Image as ImageIcon } from "lucide-react";
import api from "../../hooks/api";
import AdminSidebar from "../../components/admin/AdminSidebar";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    eventType: "",
    domain: "",
    tentativeMonth: "",
    startDate: "",
    endDate: "",
    venue: "",
    registrationRequired: true,
    registrationDeadline: "",
    maxParticipants: "",
    status: "upcoming",
    tags: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (key === "tags") {
        const tagsArray = value
          ? value.split(",").map(t => t.trim().toLowerCase())
          : [];
        data.append("tags", JSON.stringify(tagsArray));
      } else {
        data.append(key, value);
      }
    });

    if (image) data.append("poster", image);

    await api.post("/api/events", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        "Content-Type": "multipart/form-data",
      },
    });

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
          <input name="title" placeholder="Event Title" required onChange={handleChange} />

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
            <option value="general">General</option>
          </select>

          {/* Tentative Month */}
          <select name="tentativeMonth" required onChange={handleChange}>
            <option value="">Tentative Month (Planning)</option>
            {[
              "January","February","March","April","May","June",
              "July","August","September","October","November","December",
            ].map(month => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>

          {/* Start Date */}
          <div>
            <input type="date" name="startDate" onChange={handleChange} />
            <p className="text-xs text-gray-500 mt-1">
              Event start date (when the event begins)
            </p>
          </div>

          {/* End Date */}
          <div>
            <input type="date" name="endDate" onChange={handleChange} />
            <p className="text-xs text-gray-500 mt-1">
              Event end date (same as start date for single-day events)
            </p>
          </div>

          {/* Venue */}
          <input name="venue" placeholder="Venue / Location" onChange={handleChange} />

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
          <div>
            <input type="date" name="registrationDeadline" onChange={handleChange} />
            <p className="text-xs text-gray-500 mt-1">
              Last date students can register
            </p>
          </div>

          {/* Max Participants */}
          <input
            type="number"
            name="maxParticipants"
            placeholder="Maximum Participants"
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
            placeholder="Describe the event, rules, eligibility, prizes, etc."
            className="md:col-span-2"
            required
            onChange={handleChange}
          />

          {/* Tags */}
          <div className="md:col-span-2">
            <input
              name="tags"
              placeholder="Tags (comma separated)"
              onChange={handleChange}
            />
            <p className="text-xs text-gray-500 mt-1">
              Example: coding, ces, hackathon, ai, beginners
            </p>
          </div>

          {/* Poster Upload (Moved to Bottom) */}
          <div className="md:col-span-2 space-y-2 mt-4">
            <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">
              Event Poster
            </label>

            <label className="flex items-center justify-center w-full h-32 px-4 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl cursor-pointer hover:border-indigo-400 hover:bg-indigo-50/30 group">
              <div className="flex flex-col items-center space-y-2">
                <ImageIcon className="w-8 h-8 text-slate-400 group-hover:text-indigo-500" />
                <span className="font-medium text-slate-500 text-sm">
                  {image ? image.name : "Upload event poster (recommended 1:1 or 16:9)"}
                </span>
              </div>

              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
          </div>

          <button className="bg-blue-900 text-white py-2 rounded md:col-span-2">
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
