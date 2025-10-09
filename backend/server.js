import express from "express";
import {connectDb} from "./config/db.js";
import todoRoute from "./routes/todoRoutes.js";

const app = express();
const PORT = 5000;

connectDb();

app.use(express.json());

app.get("/", (req, res)  => {
    res.send("Backend is running");
})


app.use("/api/todo", todoRoute);

app.listen(PORT, () => {
    console.log("Backend is running");
})