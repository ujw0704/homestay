import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
function Header() {
  return (
    <div className='Header-container'>
        <div className='Headercont'>
        <ul >
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">about</Link>
            </li>
            <li>
                <Link to="/contact">contact</Link>
            </li>
            <li>
              <Link to ="/Register">Register</Link>
            </li>
            <li>
              <Link to="/Booking">Booking</Link>
            </li>
            </ul>
    </div>
    </div>
  )
}

export default Header