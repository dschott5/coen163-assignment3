import Navbar from "../components/Navbar";
import "../stylesheets/Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="dj-search">
          <h2>DJ Search</h2>
        </div>
        <div className="station-search">
          <h2>Station Search</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
