import React, { useState } from 'react';
import './carrousel.css';

function Carrousel(props) {
    const imgStyle = { width: '100%', height: '600px', objectFit: 'cover', borderRadius: '25px' };
    const [currentImage, setCurrentImage] = useState(0);

    const handleNextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % props.imgSrc.length);
    };

    const handlePrevImage = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + props.imgSrc.length) % props.imgSrc.length);
    };

    // "%" ici sert a revenir a la premiere ou derniere image si nous arrivons au bout/début 

    return (
        <div className='carousel-container'>
            <div className='carouselMain'>
                <img src={props.imgSrc[currentImage]} alt='Cover' style={imgStyle} />
                <span className='image-counter'>{currentImage + 1} / {props.imgSrc.length}</span>
            </div>
            <div className='carousel-controls'>
                <button onClick={handlePrevImage}>&#8249;</button>
                <button onClick={handleNextImage}>&#8250;</button>
            </div>

        </div>
    )
}

export default Carrousel
