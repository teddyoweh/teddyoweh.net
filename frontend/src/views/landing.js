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
    
        <h4>Lastest OpenSource Release</h4>
        <div className="box-stuff"></div>
  
      </div>
      
    </div>
    
   
    
      
    
  </div>
  )
  
  ;
}
export default LandingPage