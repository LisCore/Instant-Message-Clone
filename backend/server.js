import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();


app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
// app.get("/", (req, res) => {
//     res.send("Hello World!!");
// });

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});

// app.listen(PORT, () => console.log(`Server Running on port ${PORT}`)); 