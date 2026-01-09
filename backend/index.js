import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDb from "./config/db.js";

import Admin from "./routes/admin.js";
import Event from "./routes/event.js";
import Student from "./routes/student.js";

dotenv.config();
ConnectDb();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: [
      "http://localhost:3000", // Docker frontend
      "http://localhost:5173", // Local Vite dev
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.use(express.json());

app.use("/api/admin", Admin);
app.use("/api/events", Event);
app.use("/api/student", Student);

app.listen(PORT, () => {
  console.log("Our server is running on port", PORT);
});
