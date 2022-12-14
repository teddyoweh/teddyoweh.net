import React from 'react';
import teddyimg from '../assets/images/teddyoweh.jpeg';
import { NavBar } from "../components";
import {Helmet} from "react-helmet";
function AboutPage(props) {
  return (
  <>
   <Helmet>
               <title>About • Teddy Oweh </title>
    <meta name="description" content='About • Teddy Oweh | Software Engineer (ML) & Network Engineer.' />
    <meta name="keywords" content="Teddy Oweh, Ifechukwudeni, Teddy Oweh"/>
    <meta name="author" content="Teddy Oweh • Computer Scientist"/>
    <meta name="generator" content="Teddy Oweh"/>
    <link rel="canonical" href="https://teddyoweh.net/about" />
    <meta name="robots" content="index, follow"/>
    <meta property="og:type" content="website" />

    <meta property="og:title" content="About • Teddy Oweh" />

    <meta property="og:description" content='About • Teddy Oweh | Software Engineer (ML) & Network Engineer.' />

    <meta property="og:image" content={teddyimg} />

    <meta property="og:url" content="https://teddyoweh.net/about" />

    <meta property="og:site_name" content="About • Teddy Oweh" />
    <meta name="twitter:title" content="About • Teddy Oweh"/>

    <meta name="twitter:description" content="About • Teddy Oweh | Software Engineer (ML) & Network Engineer."/>

    <meta name="twitter:image" content={teddyimg}/>

    <meta name="twitter:site" content="@tedddyoweh"/>

    <meta name="twitter:creator" content="@tedddyoweh"/>
            </Helmet>

    <div className="app">
  
    <NavBar page='about'/>
    <div className="about">
        <div className="teddy-full">
        <label htmlFor="">Ifechukwudeni (Teddy) Oweh.</label>
        
        </div>
        <div className="teddy-cool">

            <p>
   
              <p className='second'> Coding is like a puzzle, and sometimes the best way to solve it is to take a step back and look at the big picture.</p>
              <span>
              <b> - Teddy Oweh</b>
              <small>Software Engineer (ML)  </small>
              </span>
              </p>
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
    </>
  );
}

export default AboutPage;