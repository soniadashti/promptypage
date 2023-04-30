import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
    <div className="about">
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
    );
}
