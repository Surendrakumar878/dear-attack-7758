import Carousel from 'react-bootstrap/Carousel';

function AnotherSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_251222_400.jpg?tr=w-1920,q=80" alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_251222_400.jpg?tr=w-1920,q=80"
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_251222_400.jpg?tr=w-1920,q=80"
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_251222_400.jpg?tr=w-1920,q=80"
          alt="fourth slide"
        />

        
      </Carousel.Item>
      
      
    </Carousel>
  );
}

export default AnotherSlider;