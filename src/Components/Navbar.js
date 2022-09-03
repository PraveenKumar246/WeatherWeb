import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
   
  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg">
    
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        <b className="logo">WeatherNow </b>
      </NavLink>
    
    
      <button 
        className="navbar-toggler">
        
         <i className="fas fa-bars text-white"></i>
      </button>
 
      <div>
        <ul className="navbar-nav">
       

            <li className>
              <NavLink className="nav-link" to="/" exact>
                <i 
                className="fas fa-tachometer-alt">
                </i>Home
              </NavLink>
            </li>

            <li>
              <NavLink className="nav-link" to="/about" exact>
                <i 
                className="far fa-address-book">
                </i>About
              </NavLink> 
            </li>

       
            <li>
              <NavLink className="nav-link" to="/contact" exact>
                <i 
                className="far fa-copy">
                </i>Contact Us
              </NavLink>
            </li>
            
        </ul>
      </div>
  </nav>
  )
}
export default Navbar;