import React from 'react';
import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import Home from './Componets/Home/Home';

import About from './Componets/About/About';
import Services from './Componets/Services/Services';
import Portfolio from './Componets/Portfolio/Portfolio';
import Contact from './Componets/Contact/Contact';




function App() {
  return (
    <div >
     
      <Navbar/> 
      <Home/>
     <About/>
     <Services/>
     <Portfolio/>
     <Contact/>
     
    
     


    </div>
  );
}

export default App;