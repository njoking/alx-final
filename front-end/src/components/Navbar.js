import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import "../pages/Images/Capture.PNG";
import Logout from "../pages/Logout";

export default function Navbar() {
  const user = localStorage.getItem("token"); // Check if the user is logged in
  const navigate = useNavigate();

  const handlePrivateLink = (path) => {
    if (user) {
      navigate(path); // Navigate to the desired path if logged in
    } else {
      navigate("/login"); // Redirect to login page if not logged in
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light gradient-bg">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img
              src={require("../pages/Images/Capture.PNG")}
              alt="pawprint"
              width="42"
              height="45"
              className="rounded-circle"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active me-3"
                  aria-current="page"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link me-3"
                  onClick={() => handlePrivateLink("/adopt")}
                  style={{ cursor: "pointer" }}
                >
                  Adopt
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link me-3"
                  onClick={() => handlePrivateLink("/list")}
                  style={{ cursor: "pointer" }}
                >
                  List
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link me-3"
                  onClick={() => handlePrivateLink("/adopt")}
                  style={{ cursor: "pointer" }}
                >
                  Book Appointment
                </span>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to={"/resources"}>
                  Resources
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to={"/contact"}>
                  Contact Us
                </Link>
              </li>
              {user && (
                <li className="nav-item">
                  {" "}
                  <Logout />
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
