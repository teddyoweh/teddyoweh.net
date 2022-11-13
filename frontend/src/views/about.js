import React from 'react';
import teddyimg from '../assets/images/teddyoweh.jpeg';
import { NavBar } from "../components";
function AboutPage(props) {
  return (
    <div className="app">
  
    <NavBar page='about'/>
    <div className="about">
        <div className="teddy-full">
        <label htmlFor="">Ifechukwudeni (Teddy) Oweh.</label>
        
        </div>
        <div className="teddy-cool">
            <p>Coding is like a puzzle, and sometimes the best way to solve it is to take a step back and look at the big picture.</p>
            <img src={teddyimg} alt="" />
        </div>
        <div className="teddy-info">
            <div className="area-sh">
                <label htmlFor="">Area of Expertise.</label>
            </div>
            <div className="area-of-sh">
            
            </div>
        </div>
        
        
        
    </div>
    </div>
  );
}

export default AboutPage;