import React from "react";
import teddylogo from '../assets/images/TO.png'
function NavBar(props){

return(
<>
    <nav>
        <div className="logo">
        <a href="/">
            <label htmlFor="">TEDDY.</label>
            
            </a>
        </div>
        
        <div className="nav-stuff">
            
            <a href="/">
                <label htmlFor="">Home</label>
                <span className={props.page=='landing'?'active':null}></span>
            </a>
            <a href="/about">
                <label htmlFor="">About</label>
                <span className={props.page=='about'?'active':null}></span>
            </a>
            
            <a href="/research">
                <label htmlFor="">Research</label>
                <span className={props.page=='research'?'active':null}></span>
            </a>
            
            <a href="/opensource">
                <label htmlFor="">OpenSource</label>
                <span className={props.page=='opensource'?'active':null}></span>
            </a>
        
            <a href="/contact">
                <label htmlFor="">Contact</label>
                <span className={props.page=='contact'?'active':null}></span>
            </a>
        </div>
        <div className="empty"></div>

    </nav>
</>

)
}

export default NavBar;