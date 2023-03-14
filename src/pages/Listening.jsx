import Navbar from "../components/Navbar";
import "../stylesheets/Listening.css";
import { FaHeart, FaRegEye } from 'react-icons/fa';

const Listening = () => {
  
  return (
    <>
      <Navbar />
      <div class="background-image"></div>
      <div className="hosting-container">
        <div className="host-controls">
          <div className="controls-wrapper">
            <h2>Current DJ</h2>
          </div>
          <div className="music-container">
            <div className="music-section">
              <img src="https://static-cse.canva.com/blob/1010199/1600w-1Nr6gsUndKw.jpg" alt="Album Cover" />
              <h2>Bad Habit</h2>
              <p>Steve Lacey</p>
            </div>
            <div className="like-follow-container">
              <button className="like-button"><FaHeart /> Like</button>
              <button className="follow-button"><FaRegEye /> Follow</button>
            </div>
          </div>
        </div>
        <div className="chat">
          <div className="chat-container">
            <h2>Chat</h2>
            <div className="chat-section">
              <ul>
                <li><b>DantheMom</b>: Why aren't you doing your laundry?!</li>
                <li><b>Dantheman</b>: Mom I'm busy!!!! Leave me alone</li>
                <li><b>User9203758423</b>: love this song bro</li>
              </ul>
              <form>
                <input type="text" placeholder="Enter your message" />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listening;