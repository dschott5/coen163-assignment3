import Navbar from "../components/Navbar";
import "../stylesheets/About.css"
import { Link } from "react-router-dom";
import Contact from "../pages/AboutComps/Contact.jsx"

const About = () => {
  return( 
    <>
    <Navbar />
    <div className="about-container">
      <div className="contact"><Contact /></div>
      <div className="help">
        <h2>Help</h2>
        <div className="link-container">
          <Link to="/home" className="link">
            <div>
              <span>Home</span>
              <p>Look up other AirDJs and search for radio stations.</p>
            </div>
          </Link>
          <Link to="/account" className="link">
            <div>
              <span>Account</span>
              <p>Change your account settings and view your socials.</p>
            </div>
          </Link>
          <Link to="/hosting" className="link">
            <div>
              <span>Host</span>
              <p>Host your own radio station for others to listen.</p>
            </div>
          </Link>
          <Link to="/" className="link">
            <div>
              <span>Exit</span>
              <p>Sign out and log in or create a new account.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
