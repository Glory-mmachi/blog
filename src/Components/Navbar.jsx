import React from 'react'
import logoImg from '../assets/Frame.svg'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav-container'>
    <div className='nav-left'>
        <span><img src={logoImg} alt="" width={25}/></span>
        <h2>Ixartz’s Blog</h2>
    </div>
    <ul className='nav-right'>
        <li>Blog</li>
        <li>Newsletter</li>
        <li>Twitter</li>
    </ul>

    </div>
  )
}

export default Navbar