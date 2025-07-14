import { Link } from "react-router-dom";
import "./Home.css";

const Hero = () => {
  return (
    <div className="home-container">
      <h1>Employee Management System</h1>
      <p>Welcome! Manage your employees efficiently.</p>
      <div className="home-buttons">
        <Link to="/login">
          <button className="home-btn">Login</button>
        </Link>
        <Link to="/register">
          <button className="home-btn">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;