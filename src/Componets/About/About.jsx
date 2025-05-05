import React from 'react';
import './About.css';
import ProfilePic from '../../assets/ilePic.jpg'; // Make sure this image exists

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      { <img src={ProfilePic} alt="Profile" className="ilepic" /> }
      <p>
        Hello! I'm Gadafi, a passionate web developer with a focus on building
        modern, responsive, and user-friendly websites. I enjoy bringing ideas
        to life through clean code and creative design. I’m constantly learning
        new technologies and improving my skills to stay current in the fast-evolving tech world.
      </p>
    </section>
  );
};

export default About;
