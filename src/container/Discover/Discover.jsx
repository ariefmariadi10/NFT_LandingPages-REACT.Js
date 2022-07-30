import React from 'react';
import { data } from '../../constants';

import './Discover.css';

const DiscoverCard = ({ discover: { imgUrl,profil_1,profil_2,profil_3,profil_4,title,icon,bid,amount,time}}) => (
  <div className='app__discover_card'>
    <div className="app__discover_card_head">
      <img className='nft__images' src={imgUrl} alt="NFT Images" />
        <img className='profil_1' src={profil_1} alt="Profil 1" />
        <img className='profil_2' src={profil_2} alt="Profil 1" />
        <img className='profil_3' src={profil_3} alt="Profil 1" />
        <img className='profil_4' src={profil_4} alt="Profil 1" />
    </div>
    <div className="app__discover_card_description">
      <h1 className='h2__font1'>{title}</h1>
      <div className='description_bid'>
        <div className='bid'>
          <img src={icon} alt="Etherum Icon" />
          <p className='p__font1'>{bid}</p>
        </div>
        <p className='p__font1 amount'>{amount}</p>
      </div>
    </div>
    <div className='app__discover_card_times'>
      <p className='p__font1'>{time}</p>
      <a href="#">Place a bid</a>
    </div>
  </div>
)

const Discover = () => {
  return (
    <div className='app__discover section__padding'>
      <div className="app__discover-head">
        <h1 className='h1__font2'>DISCOVER MORE NFTs</h1>
        <ul>
          <li className='color__purple'><a href="#">All Categories</a></li>
          <li><a href="#">Art</a></li>
          <li><a href="#">Celebrities</a></li>
          <li><a href="#">Gaming</a></li>
          <li><a href="#">Sport</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">Crypto</a></li>
        </ul>
      </div>
      <div className="app__discover-content">
        {data.discovers.map((discover) => <DiscoverCard discover={discover} key={discover.title} /> )}
      </div>
      <div className="app__discover-button">
        <button className='button_2'>More NFTs</button>
      </div>
    </div>
  )
}

export default Discover;