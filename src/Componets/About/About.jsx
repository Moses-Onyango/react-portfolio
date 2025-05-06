import React from 'react';
import ProfilePic from '../../assets/ilePic.jpg'; // Make sure this image exists

const About = () => {
  return (
    <section
      id="about"
      className="py-[60px] px-5 text-center bg-[#f5f5f5]"
    >
      <h2 className="text-2xl mb-5 text-[#222] font-semibold">About Me</h2>
      <img
        src={ProfilePic}
        alt="Profile"
        className="w-[150px] h-[150px] rounded-full object-cover border-4 border-[#222] mb-5 mx-auto "
      />
      <p className="max-w-[600px] mx-auto text-[1.1rem] text-[#333] leading-relaxed">
        Hello! I'm Gadafi, a passionate web developer with a focus on building
        modern, responsive, and user-friendly websites. I enjoy bringing ideas
        to life through clean code and creative design. I’m constantly learning
        new technologies and improving my skills to stay current in the fast-evolving tech world.
      </p>
    </section>
  );
};

export default About;
