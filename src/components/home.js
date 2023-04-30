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
              <h2>Break the Inter-generational Gap in Your Long Distance Family</h2>
              <p>The only mobile application that gives you and your family chat prompts to get to know one</p>
            </div>
          </header>
          <div className="screens">
            <img src={`${process.env.PUBLIC_URL}/websiteimg/one.png`} alt="screen" className="screen-image"/>
            <img src={`${process.env.PUBLIC_URL}/websiteimg/two.png`} alt="screen" className="screen-image"/>
            <img src={`${process.env.PUBLIC_URL}/websiteimg/three.png`} alt="screen" className="screen-image"/>
          </div>
          <div className="overview">
            <h2>Overview</h2>
            <p className="mission">Problem Statement</p>
            <p>Our mission is to bridge inter-generational gaps for distanced families. We found that talking to distanced
              family members was challenging for many individuals as they did not know what to speak about. This led us to Prompty,
              an app that gives you simple and easy prompted conversation topics for all ages. These prompts can give you more to talk
              about with your family and get to know them past the surface level.</p>
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
