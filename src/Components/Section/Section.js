import React from 'react'
import { NavLink } from 'react-router-dom'
import './Section.css'


function Section() {
  return (
    <footer className="section">
      <div className="container">
        <h1 className="section__title">Want to build something amazing?</h1>
        <NavLink exact to="/contact"><button className="btn section__btn">GET IN TOUCH</button></NavLink>
      </div>
    </footer>
  )
}

export default Section
