import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
    <div className="about">
        <h1 className="text-center mt-4">Team Lingua</h1>
        <div className="our-team">
        <div className="image-container">
        <img src="websiteimg/Neil.jpg" alt="Neil" />
        <h4>Neil Dadlani</h4>
        <p>Project Manager</p>
        </div>
        <div className="image-container">
        <img src="websiteimg/Sonia.jpg" alt="Sonia" />
        <h4>Sonia Dashti</h4>
        <p>Product Manager & Designer</p>
        </div>
        <div className="image-container">
        <img src="websiteimg/Travon.jpg" alt="Travon" />
        <h4>Travon Dao</h4>
        <p>Full-Stack Developer</p>
        </div>
        <div className="image-container">
        <img src="websiteimg/Saba.png" alt="Saba" />
        <h4>Saba Tabatabai</h4>
        <p>UI/UX Designer</p>
        </div>
        <div className="image-container">
        <img src="websiteimg/Jacob.jpg" alt="Jacob" />
        <h4>Jacob Hitchcock</h4>
        <p>Front-End Developer</p>
        </div>
        </div>
    </div>
    );
}
