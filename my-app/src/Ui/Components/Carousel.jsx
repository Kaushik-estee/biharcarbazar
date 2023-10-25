import React, { useState } from 'react';
import "./carousel.css"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

function ImageCarousel({ images }) {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    };

    return (
        <div className="image-carousel1">
            <div className="arrow-button prev" onClick={prevImage}>
                <AiOutlineArrowLeft />
            </div>
            <div className="image-container1">
                <img src={images[currentImage]} alt="Carousel" />
            </div>
            <div className="arrow-button next" onClick={nextImage}>
                <AiOutlineArrowRight />
            </div>
        </div>
    );
}

export default ImageCarousel;
