import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState({
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
      const url = "http://localhost:8000/api/auth/login";
      const res = await axios.post(url, data);
      if (res.data.error) {
        return res.data.error;
      }
      if (res.data.success) {
        navigate("/");
        localStorage.setItem("token", res.data.data);
      }
      console.log(res.data.success);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="bodylogin" style={{ height: "100vh" }}>
      <form className="formcontainer" onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              id="email"
              name="email"
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
              placeholder="Password"
              id="password"
              name="password"
              required
              onChange={handleChange}
              value={data.password}
            />
          </div>
        </div>
        {error && <div className="error_msg">{error}</div>}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <p>I don't have an account?</p>
        <Link to={"/signup"}>
          {" "}
          <p style={{ color: "blue" }}>Sign Up</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
