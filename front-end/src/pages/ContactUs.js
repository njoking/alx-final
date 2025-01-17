import React, { useState } from "react";
import "./ContactUs.css";
import axios from "axios";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/api/cont", {
        name,
        email,
        message,
      });
      setStatusMessage("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatusMessage("Error sending message. Please try again.");
      console.error("Error sending message:", error);
    }
  };

  return (
    <form className="contactus-container" onSubmit={handleSubmit}>
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Phone: +00000000000</p>
        <p>Email: info@example.com</p>
        <p>Address: 123 Example Street, Nairobi, Kenya</p>
      </div>
      <div className="form-section">
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="Name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="Message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </div>
    </form>
  );
};

export default ContactUs;
