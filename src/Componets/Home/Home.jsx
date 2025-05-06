import React from 'react';
import ProfilePic from '../../assets/ilePic.jpg'; 

const Home = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white text-center px-5">
      <div className="max-w-[700px]">
        <img
          src={ProfilePic}
          alt="Profile"
          className="w-[150px] h-[150px] rounded-full object-cover border-4 border-white mb-5 mx-auto"
        />
        <h1 className="text-[3.5rem] mb-2 text-[#a8dadc]-600">Hi, I'm Moses Onyango</h1>
        <h2 className="text-[2rem] text-[#a8dadc] mb-4">Frontend Developer</h2>
        <p className="text-[1.1rem] mb-8">
          I build clean and responsive web applications using modern technologies.
          Let's create something amazing together.
        </p>
        <a
          href="#portfolio"
          className="inline-block px-6 py-3 bg-[#f1faee] text-[#1d3557] font-bold rounded-lg no-underline transition-colors duration-300 hover:bg-[#a8dadc]"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Home;
