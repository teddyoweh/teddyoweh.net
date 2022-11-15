import React from 'react';
import teddyimg from '../assets/images/teddyoweh.jpeg';
import research1 from '../assets/images/research1.jpeg'
import research2 from '../assets/images/research2.jpeg'
import research3 from '../assets/images/research3.jpeg'
import { NavBar } from "../components";
function ResearchPage(props) {
  return (
  <>
   <Helmet>
               <title>Research • Teddy Oweh </title>
    <meta name="description" content='Research • Teddy Oweh, Academia Research Projects.' />
    <meta name="keywords" content="Teddy Oweh | Ifechukwudeni | Teddy Oweh"/>
    <meta name="author" content="Teddy Oweh • Computer Scientist"/>
    <meta name="generator" content="Teddy Oweh"/>
    <link rel="canonical" href="https://teddyoweh.net/research" />
    <meta name="robots" content="index, follow"/>
    <meta property="og:type" content="website" />

    <meta property="og:title" content="Research • Teddy Oweh" />

    <meta property="og:description" content='Research • Teddy Oweh, Academia Research Projects. ' />

    <meta property="og:image" content={teddyimg} />

    <meta property="og:url" content="https://teddyoweh.net/research" />

    <meta property="og:site_name" content="Research • Teddy Oweh" />
    <meta name="twitter:title" content="Teddy Oweh"/>

    <meta name="twitter:description" content="Research • Teddy Oweh, Academia Research Projects."/>

    <meta name="twitter:image" content={teddyimg}/>

    <meta name="twitter:site" content="@tedddyoweh"/>

    <meta name="twitter:creator" content="@tedddyoweh"/>
            </Helmet>

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
        <span>Student Researcher (Mathematics Department, Tarleton State University)
        <small>Faculty:
        <a href="mailto:scook@tarleton.edu"><b> Dr. Scott Cook</b></a>
        ,
        <a href="mailto:cmitchell@tarleton.edu"><b>Dr. Chris Mitchell</b></a></small></span>
        
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
        <span>
        
        Lead Student Researcher (Electrical & Computer Science Department, Tarleton State University)
       <small>Faculty: <a href="mailto:sadashiva@tarleton.edu">Dr. Thejas Gubbi Sadashiva.</a></small> 
        </span>
        
        
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
    
    </>
  );
}

export default ResearchPage;