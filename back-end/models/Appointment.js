const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  animalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Animal",
    required: true,
  },
  date: { type: Date, required: true },
  adopterName: { type: String, required: true },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
