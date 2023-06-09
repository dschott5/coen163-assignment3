import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/landing-bg.png";
import "../stylesheets/Landing.css";

const Landing = () => {
  // Handles background overlay fade-in
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOverlayOpacity(0.7);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Handles text fade-in
  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("show");
        }, 500 * index);
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [overlayOpacity]);

  return (
    <div className="landing-page">
      <div
        className="landing-overlay"
        style={{ opacity: overlayOpacity }}
      ></div>
      <div className="content-wrapper">
        <p className="fade-in landing-catchphrase">Unleash your inner DJ.</p>
        <div className="fade-in landing-text">
          <p>First time here? <Link to="/create-account">Create an account</Link> to get started.</p>
        </div>
        <div className="fade-in landing-text">
          <p>Already an AirDJ? <Link to="/login">Log in</Link> to resume your journey.</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
