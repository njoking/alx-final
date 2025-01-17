const mongoose = require("mongoose");

const AnimalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  breed: { type: String, required: true },
  image: { type: String, required: true },
  available: { type: Boolean, default: true },
});

module.exports = mongoose.model("Animal", AnimalSchema);
