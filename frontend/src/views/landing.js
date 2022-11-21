import React from "react";
import { NavBar } from "../components";
function LandingPage() {
  return(
  
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
    
   
    
      
    
  </div>
  )
  
  ;
}
export default LandingPage