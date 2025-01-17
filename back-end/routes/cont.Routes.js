const express = require("express");
const { saveContactMessage } = require("../controllers/cont.Controller");

const contRoutes = express.Router();

contRoutes.post("/cont", saveContactMessage);

module.exports = contRoutes;
