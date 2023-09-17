import React,{useEffect} from "react";
const NavBar = ({mainLogoName}) => {
    return (
        
        <nav className="main-nav-outer " id="test">
            <div className="container">
                <ul className="main-nav">
                <li className="small-logo"><a href="#header"><img height='75px' width='75px' src={`${process.env.REACT_APP_BASE_URL}/settings/${mainLogoName}`} alt="" /></a></li>
                    <li><a href="#header">Home</a></li>
                    <li><a href="#service">Services</a></li>
                    <li><a href="#Portfolio">Portfolio</a></li>
                    
                    <li><a href="#client">Clients</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <a className="res-nav_click" href="#"><i class="fa-bars"></i></a>
            </div>
        </nav>
    )
}
export default NavBar;