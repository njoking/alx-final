import "./Resources.css";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div className="resources-container">
      <h1 style={{ color: "white" }}>Resources</h1>
      <div className="card-container">
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="Resource 1" />
          <div className="card-body">
            <h5 className="card-title">Reporting a Case</h5>
            <p className="card-text">
              Learn the steps to report cases of animal cruelty, neglect, or any
              form of abuse. This resource provides guidelines on what evidence
              to collect, how to file a report, and who to contact in order to
              help protect animals in need.
            </p>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="Resource 2" />
          <div className="card-body">
            <h5 className="card-title">Caring for Pets</h5>
            <p className="card-text">
              This guide covers the basic needs and care practices for domestic
              animals. From nutrition to exercise, medical care to grooming,
              learn the essentials of keeping your pets happy and healthy at
              home.Because we care
            </p>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="Resource 3" />
          <div className="card-body">
            <h5 className="card-title">What to expect</h5>
            <p className="card-text">
              Whether you're adopting or rescuing an animal, this resource
              outlines what you can expect throughout the process. Understand
              the emotional, physical adjustments required, along with how to
              prepare for your new friend.
            </p>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <Link to="/tips">
        <button type="button" class="btn btn-primary mt-4" to="/tips">
          TIPS
        </button>
      </Link>
    </div>
  );
};
export default Resources;
