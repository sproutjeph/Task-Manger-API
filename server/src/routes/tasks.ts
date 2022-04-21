import express from "express";
import { getAllTasks } from "../controllers/task.controller";
import {
  getTask,
  deleteTask,
  createTask,
  upDateTask,
} from "../controllers/task.controller";

const router = express.Router();

router.route("/").post(createTask);
router.route("/").get(getAllTasks);
router.route("/:id").get(getTask);
router.route("/:id").delete(deleteTask);
router.route("/:id").patch(upDateTask);

export default router;
