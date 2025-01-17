require("dotenv").config();
const express = require("express");
const connection = require("./db");
const cors = require("cors");
const path = require("path");
const animalRoutes = require("./routes/list.Routes");
const appointmentRoutes = require("./routes/appointment.Routes");
const tipRoutes = require("./routes/tips.Routes");
const authRoutes = require("./routes/auth.Routes");
const contRoutes = require("./routes/cont.Routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api", animalRoutes);
app.use("/api", appointmentRoutes);
app.use("/api", tipRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", contRoutes);

const port = process.env.PORT || 8000;

connection();
app.listen(port, () => console.log(`Server listening on port ${port}...`));
