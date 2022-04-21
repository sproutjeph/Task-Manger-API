import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import tasksRouter from "./routes/tasks";
import notFound from "../middleware/not-found";
import errorHandler from "../middleware/error-handler";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api/v1/tasks", tasksRouter);

// app.use(notFound);
app.use(errorHandler);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

export default app;
