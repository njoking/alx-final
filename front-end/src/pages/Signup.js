import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Loginsignup.css";
import axios from "axios";

const Signup = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8000/api/auth/register";
      console.log(data);
      const { data: res } = await axios.post(url, data);
      setSuccess(res); // Save success message
      setError("");
      navigate("/login");
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        setSuccess("");
      }
    }
  };
  return (
    <div className="bodylogin" style={{ height: "100vh" }}>
      <form onSubmit={handleSubmit} className="formcontainer">
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              onChange={handleChange}
              value={data.name}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              onChange={handleChange}
              value={data.email}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              id="password"
              required
              name="password"
              onChange={handleChange}
              value={data.password}
            />
          </div>
        </div>
        {success && <div className="success_msg">{success}</div>}
        {error && <div className="error_msg">{error}</div>}
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
        <p>I have an account?</p>
        <Link to={"/login"}>
          {" "}
          <p style={{ color: "blue" }}>login</p>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
