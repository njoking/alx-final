/* eslint-disable jsx-a11y/iframe-has-title */
import "bootstrap/dist/css/bootstrap.min.css";
import "./Buttons.css";
import { Link } from "react-router-dom";

export default function Buttons() {
  return (
    <div className="fixed-buttons btn-group-vertical">
      <Link to="/Chat">
        <button className="btn btn-danger">Report a case</button>
      </Link>
      <button className="btn btn-primary">
        <a
          href="https://donate.stripe.com/test_7sI7tY5sv1U2c2k9AA"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "black" }}
        >
          Donate
        </a>
      </button>
    </div>
  );
}
