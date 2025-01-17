const Appointment = require("../models/Appointment");

exports.createAppointment = async (req, res) => {
  try {
    const { animalId, date, adopterName } = req.body;
    const appointment = new Appointment({ animalId, date, adopterName });
    await appointment.save();

    res
      .status(201)
      .json({ message: "Appointment booked successfully", appointment });
  } catch (error) {
    res.status(500).json({ message: "Error booking appointment", error });
  }
};
