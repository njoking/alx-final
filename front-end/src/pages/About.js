import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="About-contents">
        <h1 className="about-title">About Stay-Pawsitive</h1>
        <p className="about-description">
          At Stay-Pawsitive, we’re more than just a service—we’re a movement.
          Our mission is to give every animal a chance at a better life. From
          helping animals find forever homes to supporting pet owners with
          resources, we believe in making a pawsitive impact.
        </p>
        <div className="about-values">
          <h2>Our Values:</h2>
          <ul>
            <li>
              <strong>Compassion:</strong> Every animal deserves love.
            </li>
            <li>
              <strong>Commitment:</strong> We’re dedicated to animal welfare.
            </li>
            <li>
              <strong>Community:</strong> Together, we can make a difference.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
