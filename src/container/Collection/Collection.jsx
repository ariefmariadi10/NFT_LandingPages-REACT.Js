import React from 'react';
import { data, images } from '../../constants';

import './Collection.css';

const CollectionFeatured =({featured: {imgUrl, imgUrl2, imgUrl3, imgUrl4, title, profil, names, item}}) => (
  <div className='app__collection-card'>
    <div className="app__collection-card_top">
      <img src={imgUrl} alt="Main Image Collection"  />
      <div className='app__collection-card_children'>
        <img src={imgUrl2} alt="Image Collection 2" />
        <img src={imgUrl3} alt="Image Collection 3" />
        <img src={imgUrl4} alt="Image Collection 4" />
      </div>
    </div>
    <div className="app__collection-card_bottom">
      <a href="#" className='h2__font1'>{title}</a>
      <div className='app__collection-profil'>
        <div className="profil">
          <img src={profil} alt="Profil" />
          <p className='p__font1'>{names}</p>
        </div>
        <span>{item}</span>
      </div>
    </div>
  </div>
)
const Collection = () => {
  return (
    <div className='app__collections section__padding'>
      <h1 className='h1__font2'>Collection Featured NFTs</h1>
      <div className='app__collection-items'>
        <div className='app__collection-items_content'>
          {data.featureds.map((featured) => <CollectionFeatured featured={featured} key={featured.title} />)}
        </div>
      </div>
    </div>
  )
}

export default Collection;