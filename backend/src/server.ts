import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
  credentials: true
}));

let projects = [
  { id: 1, name: "Client A - Website" },
  { id: 2, name: "Client B - App" }
];

let timesheets: any[] = [];

app.get("/", (_, res) => res.send("Timesheet backend is running ✅"));

app.get("/projects", (_, res) => res.json(projects));

app.post("/timesheets", (req, res) => {
  const { employee, week, entries } = req.body;
  if (!employee || !week || !entries) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  timesheets.push({ employee, week, entries });
  res.json({ message: "Timesheet submitted successfully" });
});

app.get("/manager/timesheets", (_, res) => res.json(timesheets));

app.get("/xero/connect", (_, res) => {
  res.json({ message: "Xero OAuth flow placeholder" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
