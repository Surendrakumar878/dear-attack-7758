import Carousel from 'react-bootstrap/Carousel';
import "./slider.css"

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_160123_Hyderabad.jpg?tr=w-1920,q=80"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_WeekdayHyderabad-1600x460-160123.jpeg?tr=w-1920,q=80"
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_Dry_FishBanner_1600x460_070922.jpg?tr=w-1920,q=80"
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_cmc_breakfast_460px-020122.jpg?tr=w-1920,q=80"
          alt="fourth slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bigbasket.com/media/uploads/banner_images/hp_wedding-brida_EP_1600x460px-020122.jpg?tr=w-1920,q=80"
          alt="fifth slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_bcd_paneer_460px-020122.jpg?tr=w-1920,q=80"
          alt="sixth slide"
        />
         
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;