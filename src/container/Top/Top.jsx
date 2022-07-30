import React from 'react';
import images from '../../constants/images';
import { data } from '../../constants';

import './Top.css';

const CollectionsChoice = ({ collection: {number, imgUrl, title, icon, bid, percen }}) => (
  <div className='app__colection-choice'>
    <div className="app__collection-content">
    <h1 className='app__collection-number'>{number}</h1>
    <img src={imgUrl} alt="Collection Img" />
      <div className='app__collection-notes'>
        <a href="#" className='app__collection-title'>{title}</a>
          <div className='app__collection-bid'>
            <img src={icon} alt="Etherum Icon" />
            <p>{bid}</p>
          </div>
      </div>
    </div>
      <h3 className='blue__color'>{percen}</h3>
  </div>
)

const Top = () => {
  return (
    <div className="app__top section__padding">
      <div className="app__top-left">
        <div className="app__top-left_main">
          <img className='left__main-img' src={images.gradient_1} alt="Gradient 1" />
          <div className="main__information">
            <div className='profil'>
              <img src={images.profil} alt="Profil" />
                <div>
                  <h2 className='h2__font1'>The Futr Abstr</h2>
                  <p className='p__font1'>10 in the stock</p>
                </div>
            </div>
            <div className="bid">
              <p className='p__font1'>Highest Bid</p>
                <div>
                  <img src={images.eth2} alt="Etherum Icon" />
                  <h2 className='h2__font1'>0.25 ETH</h2>
                </div>
            </div>
          </div>
        </div>
        <div className="app__top-left_children_content">
          <div className="app__top-left_children">
            <img className='images__children' src={images.gradient_2} alt="Gradient 2" />
            <div className="children__information">
              <h2 className='h2__font1'>The Futr Abstr</h2>
                <div className='bil'>
                  <img src={images.profil} alt="Profil" />
                    <div>
                      <img src={images.eth3} alt="Etherum Icon" />
                      <span>0.25ETH</span>
                    </div>
                  <p className='p__font1'>1 of 8</p>
                </div>
                <button className='button__1'>Place a bid</button>
            </div>
          </div>
          <div className="app__top-left_children">
            <img className='images__children' src={images.gradient_3} alt="Gradient 2" />
            <div className="children__information">
              <h2 className='h2__font1'>The Futr Abstr</h2>
                <div className='bil'>
                  <img src={images.profil} alt="Profil" />
                    <div>
                      <img src={images.eth3} alt="Etherum Icon" />
                      <span>0.25ETH</span>
                    </div>
                  <p className='p__font1'>1 of 8</p>
                </div>
                <button className='button__2'>Place a bid</button>
            </div>
          </div>
          <div className="app__top-left_children">
            <img className='images__children' src={images.gradient_4} alt="Gradient 2" />
            <div className="children__information">
              <h2 className='h2__font1'>The Futr Abstr</h2>
                <div className='bil'>
                  <img src={images.profil} alt="Profil" />
                    <div>
                      <img src={images.eth3} alt="Etherum Icon" />
                      <span>0.25ETH</span>
                    </div>
                  <p className='p__font1'>1 of 8</p>
                </div>
                <button className='button__2'>Place a bid</button>
            </div>
          </div>
        </div>
      </div>
      <div className="app__top-right">
        <h1 className='h1__font2'>TOP COLLECTIONS OVER</h1>
        <h2 className='h2__font1'>Last 7 days</h2>
        <div className="collections">
          {data.collections.map((collection) => <CollectionsChoice collection={collection} key={collection.title} />)}
        </div>
      </div>
    </div>
  )
}

export default Top;