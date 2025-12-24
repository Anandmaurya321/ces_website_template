
import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
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

    /* Admin Role & Access Level */
    role: {
      type: String,
      enum: ["super_admin", "admin", "event_manager"],
      default: "admin",
    },

    /* Permissions (Scalable RBAC) */
    permissions: {
      manageEvents: {
        type: Boolean,
        default: true,
      },
      manageMembers: {
        type: Boolean,
        default: true,
      },
      manageAdmins: {
        type: Boolean,
        default: false,
      },
    },

    /* Activity Tracking */
    lastLogin: {
      type: Date,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    /* Created Events (Optional) */
    createdEvents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;


/**
{
  "name": "Dr. R. K. Singh",
  "email": "admin@mmmut.ac.in",
  "password": "$2b$10$hashedPassword",
  "role": "super_admin",
  "permissions": {
    "manageEvents": true,
    "manageMembers": true,
    "manageAdmins": true
  },
  "lastLogin": "2025-01-12T09:30:00.000Z",
  "isActive": true,
  "createdAt": "2024-07-01T10:00:00.000Z"
}
 */