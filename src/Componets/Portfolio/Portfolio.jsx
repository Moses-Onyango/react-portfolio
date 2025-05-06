import React from 'react';
import Project1Img from '../../assets/shop.PNG';
import Project2Img from '../../assets/porfolio2.PNG';
import Project3Img from '../../assets/porfolio.PNG';

const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    image: Project1Img,
    description: 'An online shopping platform with React and Firebase.'
  },
  {
    id: 2,
    title: 'Portfolio Website',
    image: Project2Img,
    description: 'My personal portfolio built with React and styled-components.'
  },
  {
    id: 3,
    title: 'Blog Platform',
    image: Project3Img,
    description: 'A simple blog application with markdown support.'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 px-8 bg-[#f5f5f5] text-center">
      <h2 className="text-4xl text-[#1d3557] font-bold mb-10">My Work</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl p-4 w-[250px] shadow-lg text-center"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
