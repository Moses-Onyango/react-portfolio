import React from 'react';
import './Home.css';
import ProfilePic from '../../assets/ilePic.jpg'; 

const Home = () => {
  return (
    <section  className="home">
      <div className="home-content">
      <img src={ProfilePic} alt="Profile" className="ilePic" />
        <h1>Hi, I'm Moses Onyango</h1>
        <h2>Frontend Developer</h2>
        <p>I build clean and responsive web applications using modern technologies. Let's create something amazing together.</p>
        <a href="#portfolio" className="home-button">View My Work</a>
      </div>
    </section>
  );
};

export default Home;
