import React from 'react';
import './About.css';
import ProfilePic from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <img src={ProfilePic} alt="Profile" className="profile-pic" />
      <p>
        I'm a passionate developer who enjoys building responsive and interactive websites.
        My focus is on creating user-friendly and aesthetic digital experiences.
      </p>
    </section>
  );
};
export default Hero;