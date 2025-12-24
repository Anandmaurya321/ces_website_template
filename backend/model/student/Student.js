
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    event_participated: [
      {
        eventName: {
          type: String,
          required: true,
        },
        eventId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Event",
        },
        participationDate: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;

/**
 
  {
  "name": "Aman Kumar",
  "email": "aman@mmmut.ac.in",
  "password": "$2b$10$hashedPasswordHere",
  "event_participated": [
    {
      "eventName": "CES Hackathon 2024",
      "eventId": "65a123abc456",
      "participationDate": "2024-03-12T00:00:00.000Z"
    }
  ],
  "createdAt": "2024-01-10T08:30:00.000Z",
  "updatedAt": "2024-03-12T10:15:00.000Z"
}

 */