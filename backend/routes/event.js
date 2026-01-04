
import express from "express";
import { Upload } from "../middleware/uploadImage.js";
import createEvent from '../controller/event_section/create_event.js'
import getAllEvents from '../controller/event_section/getAll_event.js'
import getEventById from '../controller/event_section/getSingle_event.js'
import updateEvent from '../controller/event_section/update_event.js'
import deleteEvent from '../controller/event_section/delete_event.js'
import registerForEvent from '../controller/event_section/registerStudent_event.js'
import removeParticipant from '../controller/event_section/removeStudent_event.js'
import addWinners from '../controller/event_section/addWinners_event.js'
import updateEventStatus from '../controller/event_section/updateStatus_event.js'
import findEventByStatus from "../controller/event_section/getEventByStatus.js";


const router = express.Router();

router.post("/", Upload , createEvent);
router.get("/", getAllEvents);
router.get("/status" , findEventByStatus);
router.put("/:id", Upload , updateEvent);
router.get("/:id", getEventById);
router.delete("/:id", deleteEvent);

/* Extra Functional Routes */
router.post("/:id/register", registerForEvent);
router.post("/:id/remove", removeParticipant);
router.post("/:id/winners", addWinners);
router.patch("/:id/status", updateEventStatus);

export default router;

