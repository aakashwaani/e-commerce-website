import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src="src\assets\img\banner\main-phone.png"
          className="d-block w-100 img-cover"
          style={{ height: "370px" }}
        />
        <Carousel.Caption>
          <div className="carousel-caption">
            <h2 className="mb-3">Latest trending Electronic items</h2>
            <a href="#" className="btn btn-warning">
              View more
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="src\assets\img\banner\main-tech.png"
          className="d-block w-100 img-cover"
          style={{ height: "370px" }}
          alt=""
        />
        <Carousel.Caption>
          <div className="carousel-caption">
            <h2 className="mb-3">Latest trending Electronic items</h2>
            <a href="#" className="btn btn-warning">
              View more
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
