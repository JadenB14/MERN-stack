require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./src/routes/workouts');
const cors = require("cors")

// express app
const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI

app.use(cors({
	origin: "http://localhost:3000",
	methods: "GET,POST,PUT,DELETE",
	allowedHeaders: "Content-Type,Authorization"
}))

app.options("*", cors())

//middleware
app.use(express.json())

mongoose.connect(MONGO_URI)
	.then(() => console.log("Connected to MongoDB Atlas"))
	.catch((err) => console.error("MongoDb Connection Error: ", err))

//routes
app.use('/api/workouts', workoutRoutes)

app.get("/api/workouts/", (req, res) => {
	res.send("Backend is running!")
})

app.listen(PORT, () => console.log("Server running on http://localhost:4000"))
// connect to db
