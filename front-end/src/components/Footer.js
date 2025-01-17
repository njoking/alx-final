import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/resources"}>Services</Link>
          </li>
          <li>
            <Link to={"/resources"}>Resources</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>About Us</h3>
        <p>
          Stay-Pawsitive is dedicated to animal welfare and ensuring the best
          care for domestic animals in need. Join us in making a difference by
          fostering, adopting, or donating.
        </p>
      </div>

      <div className="footer-column">
        <h3>Contact Information</h3>
        <p>
          <strong>Phone:</strong> +123 456 7890
        </p>
        <p>
          <strong>Email:</strong> info@staypawsitive.com
        </p>
        <p>
          <strong>Address:</strong> 123 Example Street, Nairobi, Kenya
        </p>
      </div>
    </footer>
  );
};

export default Footer;
