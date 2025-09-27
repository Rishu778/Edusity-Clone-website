import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link, Element } from "react-scroll";
import menu_icon from '../../assets/menu-icon.png'


const Navbar = () => {

  const [sticky,setsticky]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >  50 ? setsticky(true) : setsticky(false);
    })
  },[])

  const [mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }


  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Unavailabe" className='logo' />
      <ul className={mobileMenu ? '':'hide-mobile-menu'}>
        <li><Link to='hero' offset={0} duration={500} smooth={true} >Home</Link></li>
        <li><Link to='program' offset={-260} duration={500} smooth={true} >Program</Link></li>
        <li><Link to='about' offset={-150} duration={500} smooth={true} >About Us</Link></li>
        <li><Link to='campus' offset={-260} duration={500} smooth={true} >Campus</Link></li>
        <li><Link to='testimonials' offset={-260} duration={500} smooth={true} >Testimonials</Link></li>
        <li><Link to='contact' offset={-260} duration={500} smooth={true} className='btn' >Contact Us</Link></li>
      </ul>
      <img src={menu_icon}  className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}
export default Navbar