import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/Frame.svg'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav-container'>
    {/* link to homepage */}
    <Link to='/' className='nav-left'>
        <span><img src={logoImg} alt="" width={25}/></span>
        <h2>Ixartz’s Blog</h2>
    </Link>
    <ul className='nav-right'>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/newsletter'>Newsletter</Link></li>
        <li><Link to='/twitter'>Twitter</Link></li>
    </ul>

    </div>
  )
}

export default Navbar