import React from "react";
import { NavBar } from "../components";
import teddyimg from '../assets/images/teddyoweh.jpeg';
import {Helmet} from "react-helmet";
function LandingPage() {
  return(
  <>
   <Helmet>
               <title>Teddy Oweh </title>
    <meta name="description" content='Software Engineer (ML) & Network Engineer.' />
    <meta name="keywords" content="Teddy Oweh, Ifechukwudeni, Teddy Oweh"/>
    <meta name="author" content="Teddy Oweh • Computer Scientist"/>
    <meta name="generator" content="Teddy Oweh"/>
    <link rel="canonical" href="https://teddyoweh.net/about" />
    <meta name="robots" content="index, follow"/>
    <meta property="og:type" content="website" />

    <meta property="og:title" content="Teddy Oweh" />

    <meta property="og:description" content='Software Engineer (ML) & Network Engineer.' />

    <meta property="og:image" content={teddyimg} />

    <meta property="og:url" content="https://teddyoweh.net/about" />

    <meta property="og:site_name" content="Teddy Oweh" />
    <meta name="twitter:title" content="Teddy Oweh"/>

    <meta name="twitter:description" content="Software Engineer (ML) & Network Engineer."/>

    <meta name="twitter:image" content={teddyimg}/>

    <meta name="twitter:site" content="@tedddyoweh"/>

    <meta name="twitter:creator" content="@tedddyoweh"/>
            </Helmet>

  <div className="app">
  
    <NavBar page='landing'/>
    
    <div className="landing">
    
      <div className="teddy-large">
      
        <h1>Teddy Oweh.</h1>
        
      </div>
      
      <div className="lastest-os">
    
        <h5>Lastest OpenSource Release.</h5>
        <div className="box-stuff">
          
          <div className="sidestuff">
            <div className="dotset">
              <div className="dot"></div>
              <div className="arrow"></div>
            </div>
            <div className="dotset">
              <div className="dot"></div>
              <div className="arrow"></div>
            </div>
            <div className="dotset">
              <div className="bigdot">
                <div className="dot"></div>
              </div>
            </div>
          </div>
          <div className="content">
           <p>
           
           <span> The latest open source release by <b>Teddy Oweh</b> is now available!</span>
           
          
           <span> This release contains new features, bug fixes, and improvements. </span>
           </p>
           <div className="software-list">
              <a href="https://github.com/teddyoweh/Beardb">
                <div className="software">
                  <label htmlFor="">Beardb</label>
                  <i class='bx bx-right-arrow-alt'></i>
                </div>
              </a>
              <a href="https://github.com/teddyoweh/Omark">
                <div className="software">
                  <label htmlFor="">Omarke</label>
                  <i class='bx bx-right-arrow-alt'></i>
                </div>
              </a>
           </div>
         </div>
        </div>
  
      </div>
      <div className="teddy-socials">
       <a href="mailto:teddy@teddyoweh.net">MAIL</a>
       <a href="https://www.github.com/teddyoweh">GITHUB</a>
       <a href="https://www.linkedin.com/in/teddyoweh">LINKEDIN</a>
       <a href="https://twitter.com/tedddyoweh">TWITTER</a>
       <a href="https://www.instagram.com/teddyoweh_/">INSTAGRAM</a>
      
      </div>
      
    </div>
    
   
    
      
    
  </div>  </>
  )
  
  ;
}
export default LandingPage