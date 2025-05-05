import React from 'react';
import './Portfolio.css';
import Project1Img from '../../assets/shop.PNG';
import Project2Img from '../../assets/porfolio2.PNG';
import Project3Img from '../../assets/porfolio.PNG'; // Add more images as needed

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
    <section id="portfolio" className="portfolio">
      <h2>My Work</h2>
      <div className="portfolio-items">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-item">
            <img src={project.image} alt={project.title} className="portfolio-img" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
