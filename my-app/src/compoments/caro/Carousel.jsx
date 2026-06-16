import Carousel from 'react-bootstrap/Carousel';

function StoreCarousel() {
  const baseUrl = import.meta.env.BASE_URL || "/";
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${baseUrl}Fashion.jpg`}
          alt="Fashion"
          style={{ maxHeight: '420px', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${baseUrl}Bigsale.png`}
          alt="Big sale"
          style={{ maxHeight: '420px', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${baseUrl}foryou.png`}
          alt="For you"
          style={{ maxHeight: '420px', objectFit: 'cover' }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default StoreCarousel;
