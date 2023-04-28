import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <main>
        <div className="home">
          <header className="welcome-header">
            <div className="title-first">
            <img src={`${process.env.PUBLIC_URL}/websiteimg/homeimage.png`} alt="Home" className="home-image"/>
            <h1>Prompty</h1>
            </div>
            <div className="title-container">
              <h2>Never Be at a Loss for Words with Chat Prompts to Connect with Your Distant Family</h2>
              <p>A mobile application designed for you and your distant family members. With one-on-one chat prompts you can build
             stronger relationships by having discussion topics made for you to get to know one another and start bridging the intergenerational gap.</p>
            </div>
          </header>
          <div className="screens">
            <img src={`${process.env.PUBLIC_URL}/websiteimg/one.png`} alt="screen" className="screen-image"/>
            <img src={`${process.env.PUBLIC_URL}/websiteimg/two.png`} alt="screen" className="screen-image"/>
            <img src={`${process.env.PUBLIC_URL}/websiteimg/three.png`} alt="screen" className="screen-image"/>
          </div>
          <h2 className="text-center mt-4">Our Team</h2>
          <div className="our-team">
          <div className="image-container">
            <img src="websiteimg/Neil.jpg" alt="Neil" />
            <p>Neil Dadlani</p>
          </div>
          <div className="image-container">
            <img src="websiteimg/Sonia.jpg" alt="Sonia" />
            <p>Sonia Dashti</p>
          </div>
          <div className="image-container">
            <img src="websiteimg/Travon.jpg" alt="Travon" />
            <p>Travon Dao</p>
          </div>
          <div className="image-container">
            <img src="websiteimg/Saba.png" alt="Saba" />
            <p>Saba Tabatabai</p>
          </div>
          <div className="image-container">
            <img src="websiteimg/Jacob.jpg" alt="Jacob" />
            <p>Jacob </p>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}
