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
              <label htmlFor="">Algorithm Design.</label>
              <p>
              I have developed a keen eye for detail and a knack for designing alogithms to efficiently solve Algorithmic based challenges. I am also experienced in working with large data sets and have a good understanding of computational
                            complexity.</p>
              
              </div>
              <div className="area-content">
              <label htmlFor="">Software Dev. (Fullstack).</label>
              <p>
              Probably can't say everything about my Software Development Skills, but i have been building scalable softwares ranging from Mobile, Web! and Desktop applications for over 5years, i have a knack of making my frontend design close
                            to perfect, same goes with implementing backend functionalities, i have a handful of technical skills when working with .Net, Golang, Python Flasl/FastApi & NodeJs for API Development, ReactJS,NextJS ReactNative, (quite a number of them,
                            *js frameworks*), Cloud Platforms like, Azure, Linode and Heroku.</p>
              
              </div>
              <div className="area-content">
              <label htmlFor=""> Machine Learning Dev & Data Analytics.</label>
              <p>
              Building ML Alogrithms and ML Models is an aspect of programming, that comes relatively easy to me. I have developed various Ml algorithms, feature selection process and models to solve predetermined challenges, seemseslly developed
                            APIs to carry out cross platform implementations, also participated in various research projects relating to the AI field.</p>
              
              </div>
              <div className="area-content">
              <label htmlFor=""> Network and Cloud Computing.</label>
              <p>
              Proficient and skilled with working with cloud based platforms and Unix/Linux Operating Systems. Efficiently carrying out resource allocations on Linux. Developing secure Application Programming Interfaces (APIs) and deploying and various cloud platforms or LAN based systems. Develoud cloud services like Saas,Paas and Iaas Network Management on Linux Servers</p>
              
              </div>
             
            </div>
        </div>
        
        
        
    </div>
    </div>
  );
}

export default AboutPage;