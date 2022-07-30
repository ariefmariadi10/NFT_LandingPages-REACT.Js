import React from 'react';

import {AiFillFacebook,AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import './Footer.css';

const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <div className="app__footer-content">
      <div className="app__footer-content-1">
        <h1 className='h1__font2'>NFTERS</h1>
        <p className='p__font1'>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
        <ul>
          <li><a href="#"><AiFillFacebook className='facebook'/></a></li>
          <li><a href="#"><AiFillTwitterCircle className='twitter'/></a></li>
          <li><a href="#"><AiFillLinkedin className='linkedin'/></a></li>
        </ul>
      </div>
      <div className="app__footer-content-2">
        <h2 className='h2__font1'>Market Place</h2>
        <ul>
          <li><a href="#">All NFTs</a></li>
          <li><a href="#">New</a></li>
          <li><a href="#">Art</a></li>
          <li><a href="#">Sports</a></li>
          <li><a href="#">Utility</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">Domain Name</a></li>
        </ul>
      </div>
      <div className="app__footer-content-2">
        <h2 className='h2__font1'>My Account</h2>
        <ul>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Favorite</a></li>
          <li><a href="#">My Collections</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
      <div className="app__footer-content-3">
        <h2 className='h2__font1'>Stay in The Loop</h2>
        <p className='p__font1'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</p>
        <div className="app__footer-input">
          <input className='input_1' type="email" placeholder='Enter your email '/>
          <input className='input_2' type="submit" value='Subscribe Now' />
        </div>
      </div>
      </div>
      <span className='p__font1'>Copyright © 2022 Ar Studio Tech</span>
    </div>
  )
}

export default Footer;