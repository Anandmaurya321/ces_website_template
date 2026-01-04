


import Event from "../../model/event_part/event.js";
import { cloudinary } from "../../config/cloudinary.js";


const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    if (event.poster) {
      try {
        // Extract public_id from Cloudinary URL
        const publicId = event.poster
          .split("/")
          .slice(-2)
          .join("/")
          .split(".")[0];

        await cloudinary.uploader.destroy(publicId);
      } catch (cloudErr) {
        console.error("Cloudinary deletion failed:", cloudErr.message);
       
      }
    }
    await Event.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Event and poster deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export default deleteEvent;


