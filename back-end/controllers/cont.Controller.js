const ContactMessage = require("../models/ContacttMssg");

exports.saveContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contactMessage = new ContactMessage({ name, email, message });
    await contactMessage.save();

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error sending message", error });
  }
};
