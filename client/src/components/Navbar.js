import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';
import jwlogo from '../jwlogo.png';
import { GiDandelionFlower } from "react-icons/gi";

import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className='link-container'>
           <Link  to = '/home' > <img src= {jwlogo} alt="" /> </Link>
           <Link className = 'txt blue' to = '/home' > Home</Link>
           <Link className = 'txt' to = '/products' >Products</Link>
           <Link className = 'txt' to = '/careers' >Careers</Link>
           <Link className = 'txt' to = '/work' >Our Work</Link>
           <Link className = 'txt' to = '/about' >About</Link>
           <Link className = 'txt' to = '/contact' >Contact</Link>
        <GiDandelionFlower className='ic' />
        <FiSearch  className='ic' />
        </ul>        
      </nav>
    </>
  )
}

export default Navbar
