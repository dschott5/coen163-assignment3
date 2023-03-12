import Navbar from "../components/Navbar";
import "../stylesheets/Hosting.css"

const Hosting = () => {
  return (
    <>
      <Navbar />
      <div className="hosting-container">
        <div className="host-controls">
          <h2>Host Controls</h2>
        </div>
        <div className="chat">
          <h2>Chat</h2>
        </div>
      </div>
    </>
  );
};

export default Hosting;
