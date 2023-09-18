import React, { useState } from 'react';
import './headerLogement.css';
import RatingStars from './ratingStars';

function HeaderLogement(props) {
  const imgStyle = { width: '100%', height: '600px', objectFit: 'cover', borderRadius: '25px' };
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % props.imgSrc.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + props.imgSrc.length) % props.imgSrc.length);
  };

  return (
    <div>
      <div className='header-logement'>
        <img src={props.imgSrc[currentImage]} alt='Cover' style={imgStyle} />
        <span className='image-counter'>{currentImage + 1} / {props.imgSrc.length}</span>
      </div>
      <div className='carousel-controls'>
        <button onClick={handlePrevImage}>&#8249;</button>
        <button onClick={handleNextImage}>&#8250;</button>
      </div>
      <div className='header-info'>
        <div className='header-info-left'>
          <h1>{props.titleValue}</h1>
          <h2>{props.locationValue}</h2>
          <div className='tagsList'>
            {props.tagsValue.map((tag, index) => (
              <button key={index}>{tag}</button>
            ))}
          </div>
        </div>
        <div className='header-info-right'>
          <div className='userInfo'>
            <h2>{props.nameHost}</h2>
            <img src={props.imgHost} alt='Avatar utilisateur' />
          </div>
          <div className='stars'>
            <RatingStars note={props.ratingValue} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderLogement


