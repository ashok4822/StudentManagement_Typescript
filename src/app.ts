import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import connectDb from "./config/database";
import studentRoutes from "./routes/studentRoutes";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 8080;

//Middleware
app.use(express.json());

//Connect database
connectDb();

//Test route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/students", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
