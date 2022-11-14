import React from 'react';
import teddyimg from '../assets/images/teddyoweh.jpeg';
import research1 from '../assets/images/research1.jpeg'
import research2 from '../assets/images/research2.jpeg'
import research3 from '../assets/images/research3.jpeg'
import { NavBar } from "../components";
function ResearchPage(props) {
  return (
    <div className="app">
  
    <NavBar page='research'/>
    <div className="about research">
        <div className="teddy-full">
        <label htmlFor="">Research.</label>
        
        </div>
        <div className="teddy-researchs">
        
  
        <div className="research-i">
        
        <div className="res-hed">
        <label htmlFor="">
        Model of Disease Spread Using Stochastic Processes on Networks.
        </label>
        <span>Student Researcher (Mathematics Department, Tarleton State University) </span>
        
        </div>
        
        <div className="res-body">
        <div className="res-content">
        <p>Presented new mathematical models that extend methodology which incorporates relationships (edges) between indivduals (nodes) to create a network graph on which a disease outbreak. Yields a more realistic and detailed model than
                            classical ODE systems. <br />Carried out Dynamic Systems Modelling to efficiently analyze and model the spread of disease using network graphs.
                            
        <ul>
        <li>Analyzed trends in disease spread and innovated algorithms and methods to carry out analytics.</li>
        <li>Worked with a team, on solving and creating methods for discovering disease susceptibility rate and recovery probability.</li>
       <li>Translated theoritical mathematics to pseudocode and developed algorithm to achieved predetermined functionalties.</li> 
        </ul>                    
 </p>
                            
                            <div className="teddy-mainimg">
        <img  src={research3} alt="" />
        {/* <img className='img2' src={research2} alt="" /> */}
        
        </div>
                           
        </div>
        <div className="res-img">
        <img className='reg' src={research1} alt="" />
      
        
        
        </div>
        </div>
        
        </div>
        
        
        <div className="research-i">
        
        <div className="res-hed">
        <label htmlFor="">
        Hybrid Feature Selection for Machine Learning Models.
        </label>
        <span>Lead Student Researcher (Electrical & Computer Science Department, Tarleton State University) </span>
        
        </div>
        
        <div className="res-body">
        <div className="res-content">
        <p>
        Implementation of Mini Batch K-Means Normalized Mutual Information Feature Inclusion (KNFI), Mini batch K-Means Normalized Mutual Information Feature Elimination (KNFE). Developed  An algorithm was created to determine the max number of features and the features for an ml model to run effectively and have a high accuracy score. Works with various ml algorithms.
      <br /> <ul>
       <li>Training Hybrid Machine Learning Models and comparing results against target results.</li>
       <li>Extensive research on Hybrid Machine Learning Algorithms & Models.</li>
       <li>Interpolation and analysis of model results. </li>
       </ul> 
 
        
        
        </p>
                            
              
                           
        </div>
       
        </div>
        
        </div>
        </div>
         
        
        
        
    </div>
    </div>
  );
}

export default ResearchPage;