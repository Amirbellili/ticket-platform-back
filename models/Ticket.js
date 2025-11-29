import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  priorite: { type: String, required: true },
  statut: { type: String, default: "En attente" },
  description: { type: String },
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Ticket", TicketSchema);
