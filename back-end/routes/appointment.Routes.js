const express = require("express");
const { createAppointment } = require("../controllers/book.Controller");

const router = express.Router();

router.post("/appointments", createAppointment);

module.exports = router;
