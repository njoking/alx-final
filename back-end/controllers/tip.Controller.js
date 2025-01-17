const Tip = require("../models/tips");

exports.getTips = async (req, res) => {
  try {
    const tips = await Tip.find();
    res.json(tips);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tips", error });
  }
};

exports.addTip = async (req, res) => {
  try {
    const { content } = req.body;
    const tip = new Tip({ content });
    await tip.save();

    res.status(201).json({ message: "Tip added successfully", tip });
  } catch (error) {
    res.status(500).json({ message: "Error adding tip", error });
  }
};
