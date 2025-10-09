import {Router} from "express";
import {getTodo, createTodo} from "../controllers/todoController.js";

const router = Router();

router.get("/", getTodo);
router.post("/", createTodo);
export default router;