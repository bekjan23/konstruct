import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../../img/logo.png'
import './Top.css';



function top() {
  return (
    <div className="top">
      <nav className="top__nav">
        <div className="nav__content">
          <div className="header__logo"><NavLink exact to="/"><img src={Logo} alt=""/></NavLink></div>
          <div className="nav__links">
            <NavLink exact to="/" className="nav__link">Home</NavLink>
            <NavLink to="/story" className="nav__link">About</NavLink>
            <NavLink to="/services" className="nav__link">Services</NavLink>
            <NavLink to="/work" className="nav__link">Work</NavLink>
            <NavLink to="/contact" className="nav__link">Contact</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};


export default top
