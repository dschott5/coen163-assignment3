import Navbar from "../components/Navbar";
import "../stylesheets/Listening.css";

const Listening = () => {
  return (
    <div className="listening-page">
      <Navbar />
      <div className="listening-container">
        <div className="station-info">Station Info</div>
        <div className="chat">Chat</div>
      </div>
    </div>
  );
};

export default Listening;
