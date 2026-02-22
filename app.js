import express from "express";
import { config } from "dotenv";
import cors from "cors";
import home from "./routes/home.js";
import gettrain from "./routes/getTrains.js";

config();

const PORT = process.env.PORT || 3000;
const app = express();

/* ⭐ FORCE CORS FOR EVERYTHING */
app.use(cors({
  origin: "*",
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  allowedHeaders: ["Content-Type","Authorization"]
}));

app.use(express.json());

app.use("/", home);
app.use("/trains", gettrain);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});