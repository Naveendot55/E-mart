import Slider from "react-slick";

function Productcarousel({ images }) {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return (
    <div className="slider-container w-50">
      <Slider {...settings}>
        {images && images.length > 0 &&
          images.map((img, idx) => {
            return (
              <div
                key={`${img}-${idx}`}
                className="p-2 d-flex justify-content-center align-items-center"
              >
                <img src={img} width={"500px"} alt={`Product ${idx + 1}`} />
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default Productcarousel;
