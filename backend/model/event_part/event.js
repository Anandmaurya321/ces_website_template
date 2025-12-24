
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    /* Event Type */
    eventType: {
      type: String,
      enum: [
        "annual_fest",
        "workshop",
        "seminar",
        "hackathon",
        "competition",
        "fun_event",
        "other",
      ],
      required: true,
    },

    /* Event Domain */
    domain: {
      type: String,
      enum: [
        "programming",
        "cybersecurity",
        "development",
        "ai_ml",
        "data_science",
        "blockchain",
        "robotics",
        "fun",
        "general",
      ],
      required: true,
    },

    /* Event Schedule */
    tentativeMonth: {
      type: String,
      enum: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      required: true,
    },

    startDate: {
      type: Date,
    },

    endDate: {
      type: Date,
    },

    /* Location */
    venue: {
      type: String,
      trim: true,
    },

    /* Event Poster */
    poster: {
      type: String, // Cloudinary / S3 URL
      default: "",
    },

    /* Registration Details */
    registrationRequired: {
      type: Boolean,
      default: true,
    },

    registrationDeadline: {
      type: Date,
    },

    /* Participation */
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],

    maxParticipants: {
      type: Number,
    },

    /* Event Status */
    status: {
      type: String,
      enum: ["upcoming", "ongoing", "completed", "cancelled"],
      default: "upcoming",
    },

    /* Admin Control */
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },

    /* Highlights / Winners */
    winners: [
      {
        position: String,
        student: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Student",
        },
      },
    ],

    /* Tags for search & filtering */
    tags: [
      {
        type: String,
        lowercase: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;




/*
{
  "title": "CES Hackathon 2025",
  "description": "A 24-hour coding hackathon focused on real-world problem solving.",
  "eventType": "hackathon",
  "domain": "programming",
  "tentativeMonth": "March",
  "startDate": "2025-03-15T00:00:00.000Z",
  "endDate": "2025-03-16T00:00:00.000Z",
  "venue": "Main Auditorium, MMMUT",
  "poster": "https://cloudinary.com/ces-hackathon.png",
  "registrationRequired": true,
  "registrationDeadline": "2025-03-10T00:00:00.000Z",
  "maxParticipants": 200,
  "status": "upcoming",
  "tags": ["hackathon", "coding", "ces"],
  "createdAt": "2024-12-10T10:30:00.000Z"
}
*/


