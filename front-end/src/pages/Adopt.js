import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Adopt() {
  const [animals, setAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/adopt-animals"
        );
        setAnimals(response.data);
        setFilteredAnimals(response.data);
      } catch (error) {
        console.error("Error fetching adoptable animals:", error);
      }
    };

    fetchAnimals();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = animals.filter(
      (animal) => animal.name.toLowerCase().includes(term) // Filter by name
    );
    setFilteredAnimals(filtered);
  };

  const handleAdopt = (id) => {
    navigate(`/book-appointment/${id}`);
  };

  return (
    <div className="container my-4">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
        className="form-control mb-4"
      />
      <div className="row">
        {filteredAnimals.length > 0 ? (
          filteredAnimals.map((animal) => (
            // {animals.map((animal) => (
            <div key={animal._id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={`http://localhost:8000/${animal.image}`}
                  alt={`${animal.name}`}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h3 className="card-title">{animal.name}</h3>
                  <p className="card-text">Age: {animal.age}</p>
                  <p className="card-text">Breed: {animal.breed}</p>
                </div>
                <div className="text-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAdopt(animal._id)}
                    disabled={!animal.available}
                  >
                    {animal.available ? "Adopt" : "Unavailable"}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No animals found.</p>
        )}
      </div>
    </div>
  );
}

export default Adopt;
