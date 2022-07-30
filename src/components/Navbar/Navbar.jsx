import React, {useState} from 'react';
import { GiHamburgerMenu} from 'react-icons/gi';
import {MdClose} from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';

import './Navbar.css';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
  <nav className='app__navbar'>
    <div className="app__navbar-logo">
      <h1>NFTERS</h1>
    </div>
    <div className="app__navbar-links">
      <ul>
        <li><a href="#">Marketplace</a></li>
        <li><a href="#">Resource</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </div>
    <div className="app__navbar-search">
      <div className="search">
        <input type="text" placeholder='Search' />
        <AiOutlineSearch className='search__icon' />
      </div>
    </div>
    <div className="app__navbar-button">
      <button className='button_1'>Upload</button>
      <button className='button_2'>Connect Wallet</button>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color='#3D00B7' fontSize={27} onClick={() => setToggleMenu(true)} />
      {toggleMenu && (
        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <MdClose fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
          <ul className='app__navbar-smallscreen-links'>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Resource</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
      )}
    </div>
  </nav>
  )
}
export default Navbar;