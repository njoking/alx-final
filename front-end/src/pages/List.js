import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AnimalForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    breed: "",
    image: null,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("age", formData.age);
    data.append("breed", formData.breed);
    data.append("image", formData.image);

    try {
      await axios.post("http://localhost:8000/api/list-animal", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccessMessage("Animal listed successfully!");
      setErrorMessage("");

      setFormData({
        name: "",
        age: "",
        breed: "",
        image: null,
      });
      navigate("/adopt");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Error uploading animal."
      );
      setSuccessMessage("");
    }
  };

  return (
    <div
      className="container my-4 p-4"
      style={{
        background: "linear-gradient(to right, #6a11cb, #2575fc)",
        borderRadius: "10px",
        padding: "20px",
        color: "white",
      }}
    >
      <h2 className="text-center mb-4">List an Animal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Animal Name eg Cat, dog, ..."
          value={formData.name}
          onChange={handleChange}
          className="form-control mb-3"
        />
        <input
          type="number"
          name="age"
          placeholder="Animal Age in Months"
          min={0}
          max={240}
          value={formData.age}
          onChange={handleChange}
          className="form-control mb-3"
        />
        <input
          type="text"
          name="breed"
          placeholder="Animal Breed eg Persian, German, ..."
          value={formData.breed}
          onChange={handleChange}
          className="form-control mb-3"
        />
        <input
          type="file"
          name="image"
          onChange={handleFileChange}
          className="form-control mb-3"
        />
        <button type="submit">List Animal</button>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
}

export default AnimalForm;
