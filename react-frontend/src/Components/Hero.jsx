import Slider from "./Carousel.jsx";
import "../Style.css";
import "./Hero.scss";
export default function Hero() {
  return (
    <>
      <section className="section-intro mb-3 mt-3">
        <div className="container">
          <main className="card p-3">
            <div className="row">
              <aside className="col-lg-3">
                <nav className="nav flex-column mb-3 mb-lg-0 nav-pills">
                  <a href="#" className="nav-link">
                    Electronics
                  </a>
                  <a href="#" className="nav-link">
                    Cloths and Wear
                  </a>
                  <a href="#" className="nav-link">
                    Home Interiors
                  </a>
                  <a href="#" className="nav-link">
                    Computers and Tech
                  </a>
                  <a href="#" className="nav-link">
                    Tools,equipments
                  </a>
                  <a href="#" className="nav-link">
                    Sports & Outdoor
                  </a>
                  <a href="#" className="nav-link">
                    Other Products
                  </a>
                </nav>
              </aside>
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-xxl-9  col-lg-8">
                    <div
                      id="carouselMain"
                      className="carousel-main carousel slide"
                      data-bs-ride="carousel"
                    >
                      <Slider />
                    </div>
                  </div>
                  <div className="col-xxl-3 col-lg-4 d-none d-lg-block">
                    <div className="bg-primary-light p-3 card rounded mb-3">
                      <p className="d-flex mb-3 text-base">
                        <img src="" alt="" />

                        <span>
                          Hi, user <br /> let's get started.
                        </span>
                      </p>
                      <a href="" className="btn btn-sm btn-primary w-100">
                        Join Now
                      </a>
                    </div>
                    <div className="bg-warning p-3 mb-3 text-white rounded">
                      Get US $10 off with a new supplier account <br />
                      <a
                        href="#"
                        className="text-white mt-1 fw-bold d-inline-block"
                      >
                        Get now
                      </a>
                    </div>
                    <div className="bg-info text-white p-3 rounded mb-2">
                      Send quotes with supplier preferences <br />
                      <a
                        href=""
                        className="text-white mt-1 fw-bold d-inline-block"
                      >
                        Try Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
