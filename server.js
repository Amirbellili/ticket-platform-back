import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import ticketRoutes from "./routes/tickets.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("🔥 API Backend fonctionne correctement !");
});

// Routes API
app.use("/api/tickets", ticketRoutes);

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✔️ MongoDB connecté"))
  .catch(err => console.log("❌ Erreur MongoDB:", err));

app.listen(5000, () =>
  console.log("✔️ Serveur backend démarré sur le port 5000")
);
