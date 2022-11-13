import React from "react";

function NavBar(props){

return(
<>
    <nav>
        <div className="logo">
            <label htmlFor="">teddy.</label>
        </div>
        
        <div className="nav-stuff">
            
            <a href="">
                <label htmlFor="">Home</label>
                <span className={props.page=='landing'?'active':null}></span>
            </a>
            <a href="">
                <label htmlFor="">About</label>
                <span className={props.page=='about'?'active':null}></span>
            </a>
            
            <a href="">
                <label htmlFor="">Research</label>
                <span className={props.page=='research'?'active':null}></span>
            </a>
            
            <a href="">
                <label htmlFor="">OpenSource</label>
                <span className={props.page=='opensource'?'active':null}></span>
            </a>
        
            <a href="">
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