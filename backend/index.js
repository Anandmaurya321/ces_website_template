
import express from 'express'
import cors from 'cors'
import TokenAuth from './middleware/student_authmiddleware.js';
import dotenv from 'dotenv'
import ConnectDb from './config/db.js'

import Admin from './routes/admin.js'
import Event from './routes/event.js'
import Student from './routes/student.js'

dotenv.config();
ConnectDb();
console.log(process.env.DB_URL)
const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors())
app.use(express.json());

app.use('/api/admin' , Admin);
app.use('/api/events' , Event);
app.use('/api/student' , Student);

app.listen(PORT , ()=>{console.log("Our server is running" , PORT)})


