import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function BookAppointment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [animal, setAnimal] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [adopterName, setAdopterName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const { name } = jwtDecode(token);
      setAdopterName(name);
    }
  }, []);

  useEffect(() => {
    const fetchAnimalDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/adopt-animals/${id}`
        );
        setAnimal(response.data); // Set the fetched animal data
      } catch (error) {
        console.error("Error fetching animal details:", error);
      }
    };

    fetchAnimalDetails();
  }, [id]);

  const confirmAppointment = async () => {
    try {
      await axios.post("http://localhost:8000/api/appointments", {
        animalId: id,
        date: selectedDate,
        adopterName,
      });
      await axios.patch(`http://localhost:8000/api/adopt-animal/${id}`);
      alert("Thank you for adopting! Appointment booked successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  };

  if (!animal) {
    return <p>Loading animal details...</p>; // Show loading state if animal data is not yet loaded
  }

  return (
    <div className="container my-4">
      <div className="card mb-4 text-center">
        <img
          src={`http://localhost:8000/${animal.image}`} // Display animal image
          alt={animal.name}
          className="rounded-circle img-fluid mb-3"
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
            margin: "0 auto",
            border: "5px solid #f8f9fa",
          }}
        />
        <div className="card-body text-center">
          <h3>{animal.name}</h3>
          <p>Age: {animal.age} months</p>
          <p>Breed: {animal.breed}</p>
        </div>
      </div>
      <h2>Book an Appointment</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={adopterName}
        onChange={(e) => setAdopterName(e.target.value)}
        className="form-control my-3"
      />
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className="form-control"
        minDate={new Date()}
      />
      <button className="btn btn-success my-4" onClick={confirmAppointment}>
        Confirm Adoption
      </button>
    </div>
  );
}

export default BookAppointment;
