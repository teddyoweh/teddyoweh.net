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
            <p>Coding is like a puzzle, and sometimes the best way to solve it is to take a step back and look at the big picture.   <b> - Teddy Oweh</b></p>
            <img src={teddyimg} alt="Teddy Oweh" />
        </div>
        <div className="teddy-info">
            <div className="area-sh">
                <label htmlFor="">Area of Expertise.</label>
            </div>
            <div className="area-of-sh">
              <div className="area-content">
              <label htmlFor="">Machine Learning Development</label>
              <p>
              Equipped with skills to efficiently deploy ML Models using various machine learning algorithms to devise new methods and algorithms to meet predetermined functionality goals. Exploratory data analysis skills, Sanitizing and cleaning Data. Creating graphical representations for visualizing the distribution of a dataset. Deploying models to live servers as APIs</p>
              
              </div>
            </div>
        </div>
        
        
        
    </div>
    </div>
  );
}

export default AboutPage;