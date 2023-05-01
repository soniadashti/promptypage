import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
    <div className="about">
        <h1 className="text-center mt-4">Our Team</h1>
        <div className="our-team">
        <div className="image-container">
        <img src="websiteimg/Neil.jpg" alt="Neil" />
        <p>Neil Dadlani</p>
        <p>Project Manager</p>
        </div>
        <div className="image-container">
        <img src="websiteimg/Sonia.jpg" alt="Sonia" />
        <p>Sonia Dashti</p>
        <p>Product Manager & Designer</p>
        </div>
        <div className="image-container">
        <img src="websiteimg/Travon.jpg" alt="Travon" />
        <p>Travon Dao</p>
        <p>Full-Stack Developer</p>
        </div>
        <div className="image-container">
        <img src="websiteimg/Saba.png" alt="Saba" />
        <p>Saba Tabatabai</p>
        <p>UI/UX Designer</p>
        </div>
        <div className="image-container">
        <img src="websiteimg/Jacob.jpg" alt="Jacob" />
        <p>Jacob </p>
        <p>Front-End Developer</p>
        </div>
        </div>
    </div>
    );
}
