import Navbar from "../components/Navbar";
import ChannelSearchCard from "../components/ChannelSearchCard";
import ChannelPreviewCard from "../components/ChannelPreviewCard";

import "../stylesheets/Home.css";
import {ImSearch} from 'react-icons/im'

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-container">
        <div className="dj-search">
          <div className="search-bar-container">
            <input type="text" placeholder="Search..."/>
            <button className="search-button"><ImSearch/></button>
          </div>
          <div className="horizontal-divider"></div>
          <div className="channel-card-display-section">
            <ChannelSearchCard
              name={"DanTheMan"}
              viewercount={3}
              playing={"rich flex"}
            />
            <ChannelSearchCard
              name={"Steve Lacy"}
              viewercount={3123}
              playing={"bad habit steve lacy"}
            />
            <ChannelSearchCard
              name={"Ed Sheeran"}
              viewercount={0}
              playing={"shape of you"}
            />
            <ChannelSearchCard
              name={"Steve Lacy"}
              viewercount={3123}
              playing={"bad habit steve lacy"}
            />
            <ChannelSearchCard
              name={"Steve Lacy"}
              viewercount={3123}
              playing={"bad habit steve lacy"}
            />
            <ChannelSearchCard
              name={"Steve Lacy"}
              viewercount={3123}
              playing={"bad habit steve lacy"}
            />
            <ChannelSearchCard
              name={"Steve Lacy"}
              viewercount={3123}
              playing={"bad habit steve lacy"}
            />
            <ChannelSearchCard
              name={"Steve Lacy"}
              viewercount={3123}
              playing={"bad habit steve lacy"}
            />
          </div>
        </div>
        <div className="station-feed">
          <div className="selection-banner">
            <p className="feed-selector">Recommended</p>
            <p className="feed-selector">Following</p>
          </div>
          <ChannelPreviewCard
          username={"DanTheMan"}
          title={"★ live beats to study to ★"}
          viewercount={213}
          song={"grassy field - DJDanz Edit"}
          />
          <ChannelPreviewCard
          username={"kevindurant"}
          title={"Hype Workout Music"}
          viewercount={2}
          song={"Jump - Remix"}
          />
          <ChannelPreviewCard
          username={"steven23"}
          title={"Classic Beethoven"}
          viewercount={34}
          song={"34th Etude in C"}
          />
          <ChannelPreviewCard
          username={"DJdrshiao"}
          title={"Heuristic Beats for the Soul"}
          viewercount={213123}
          song={"H1 Love"}
          />
          <ChannelPreviewCard
          username={"will.smith78"}
          title={"gaming tunes >:)"}
          viewercount={213}
          song={"Burger King 'Whopper' Theme"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
