import http from "http";
import app from "./app";
import dotenv from "dotenv";
import connectDB from "./DB/connect";
dotenv.config();
const PORT = process.env.Port || 8000;

const server = http.createServer(app);

async function startServer() {
  try {
    await connectDB(process.env.MONGODB_URL as string);
    console.log("DB conected");

    server.listen(PORT, () => {
      console.log(`Listening on port: ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
}

startServer();
