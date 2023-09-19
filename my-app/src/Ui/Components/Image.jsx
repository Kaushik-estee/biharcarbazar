import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Carousel } from 'react-responsive-carousel';
import './Productdetails.css'
const ImageCarousel = ({ images }) => {
    return (
      <Carousel >
        {images.map((image, index) => (
          <div  key={index}>
            <img  src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
    );
  };
  
  export default ImageCarousel;