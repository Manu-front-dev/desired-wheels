import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  let pathbool = location.pathname.startsWith(`/adminportal`)
  return (
    <div className="unav">
      <div className="logo">
        <img className='img' src="https://applescoop.org/image/wallpapers/mac/needed-a-f1-logo-from-f1-movie-acted-by-brad-pitt-the-logo-should-be-at-the-top-2025-11-04-148998.jpg" alt="No-Image"/>
      </div>
      <div className="links">
        {pathbool
        ?
        <ul>
          <li><NavLink to='/adminportal/'>HOME</NavLink></li>
          <li><NavLink to='/adminportal/add'>INFO</NavLink></li>
          <li><NavLink to='/'>Logout</NavLink></li>
        </ul>
        :
        <ul>
          <li><NavLink to='/userportal/'>Home</NavLink></li>
          <li><NavLink to='/userportal/cars'>Cars</NavLink> </li>
          <li><NavLink to='/userportal/about'>About</NavLink></li>
          <li><NavLink to='/'>Logout</NavLink></li>
        </ul>
        
      }
      </div>
    </div>
  )
}

export default Navbar
