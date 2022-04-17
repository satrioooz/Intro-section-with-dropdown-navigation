import React from "react";
import Banner from "../../images/image-hero-desktop.png";
import Audiophile from "../../images/client-audiophile.svg";
import Databiz from "../../images/client-databiz.svg";
import Meet from "../../images/client-meet.svg";
import Maker from "../../images/client-maker.svg";
import "./home.css";
// =========== END IMPORT ==============

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="home">
          {/* TEXT SECTION */}
          <div className="section-text">
            <h1>Make remote work</h1>
            <p>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className="button-learn">Learn More</button>
            <div className="banner-client">
              <img src={Databiz}/>
              <img src={Audiophile}/>
              <img src={Meet}/>
              <img src={Maker}/>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="section-image">
            <img src={Banner} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
