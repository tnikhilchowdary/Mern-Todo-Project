import express from "express";
import {connectDb} from "./config/db.js";

const app = express();
const PORT = 5000;

connectDb();

app.get("/", (req, res)  => {
    res.send("Backend is running");
})

app.listen(PORT, () => {
    console.log("Backend is running");
})