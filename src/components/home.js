import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <main>
        <div className="home">
          <header className="welcome-header">
            <div className="title-first">
            <img src={`${process.env.PUBLIC_URL}/websiteimg/family.jpeg`} alt="Home" className="home-image"/>
            </div>
            <div className="title-container">
              <h2><strong>Never</strong> Be at a Loss for Words with Your Long Distance Family</h2>
              <div className="flex-container">
              <p><strong>Prompty</strong>, the only mobile application that gives you and your family chat prompts to get to know one another</p>
              <img src={`${process.env.PUBLIC_URL}/websiteimg/mockup1.png`} alt="Home" className="home-image"/>
              </div>
            </div>
          </header>
          <div className="overview">
            <h2><strong>Overview</strong></h2>
          <div className="screens">
            <img src={`${process.env.PUBLIC_URL}/websiteimg/one.png`} alt="screen" className="screen-image"/>
            <img src={`${process.env.PUBLIC_URL}/websiteimg/two.png`} alt="screen" className="screen-image"/>
            <img src={`${process.env.PUBLIC_URL}/websiteimg/three.png`} alt="screen" className="screen-image"/>
          </div>
          <h3 className="features-header">Key Features</h3>
          <div className="features">
            <div className="one">
              <h4>Prompted Conversations</h4>
              <p>You are provided a randomly generated prompt in your one-on-one chat with your family member. This takes the
                pressure of trying to find a good conversation topic away from you.</p>
            </div>
            <div className="two">
              <h4>Hidden Answers</h4>
              <p>When you receive a prompt, you are unable to see the others response until you answer the prompt as well. This was done
                to encourage both users to respond to the chat prompt.
              </p>
            </div>
            <div className="three">
              <h4>Accessibility</h4>
              <p>As your family can range in all ages, we have devoted our time in designing our application for all aged audiences. It is simple and image focused so it is easy to navigate through
                regardless of your age. 
              </p>
            </div>
          </div>
          <p>Our mission is to bridge inter-generational gaps for distanced families. We found that talking to distant
              family members was challenging for many individuals as they did not know what to speak about. This led us to Prompty,
              an app that gives you simple and easy prompted conversation topics for all ages. These prompts can give you more to talk
              about with your family and help you get to know one another past the surface level.</p>
          <div className="demo">
          <h3 className="demo-header">Demo Video</h3>
          </div>
          <h4>Project Status</h4>
          <p>Effective June 9th, we will open source our capstone project for future use</p>
          </div>
        </div>
      </main>
    </div>
  );
}
