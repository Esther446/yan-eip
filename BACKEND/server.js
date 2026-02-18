import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";

app.use("/api/auth", authRoutes);


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("YAN backend is alive 🚀");
});

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("MongoDB connected"))
.catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
