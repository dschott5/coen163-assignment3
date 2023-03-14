import Navbar from "../components/Navbar";
import "../stylesheets/About.css"
import Contact from "../pages/AboutComps/Contact.jsx"

const About = () => {
  return( 
    <>
    <Navbar />
    <div className="about-container">
      <div className="contact"><Contact /></div>
      <div className="help">*Help section to be implemented soon*</div>
    </div>
    </>
  );
};

export default About;
