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
              <p>A mobile application with given weekly prompts for you and your 
              distant family so you can chat easily, get to know more about one another, and fix the
              intergenerational gap. Strengthen your family relationships with Prompty.</p>
            </div>
          </header>
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
