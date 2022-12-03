/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const VideoWithTestimonials = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="block-sec">
      <div
        className="background bg-img section-padding pb-0"
        style={{ backgroundImage: `url(img/Nyte_Video_01.gif)`}}
        data-overlay-dark="0"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="vid-area">


                <div className="cont">
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="testim-box">
                <div className="head-box">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Our Clients
                  </h6>
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                    What Our Client&apos;s Say?
                  </h4>
                </div>
                <Slider
                  {...settings}
                  className="slic-item wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="item">
                    <p>
                    Love their energy and passion towards work.
                    I'm glad I know these talented artists.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                            Iftekhar Rafsan
                          </h6>
                          <span className="author-details">
                            Professional Content creator
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                      This team is an unique phenomenon which is not easily found.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/2.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                            Sabbir Karim
                          </h6>
                          <span className="author-details">
                            Assistant Manager,  Smart Techno
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                    Great eye-catching designs that suit your needs perfectly. Works efficiently to get you top notch quality in any time frame.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/3.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                          Nafis Forkan
                          </h6>
                          <span className="author-details">
                          Co-Councilor, League of Legends Bangladesh Official
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                    Dedicated team of young designers with astonishing experience and always exceeding our expectations.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/4.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                          Fazlay Rabby
                          </h6>
                          <span className="author-details">
                          Co-Councilor, Bangladesh Youth Development & Electronic Sports Association
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                    It’s just incredible how far they’ve come. Most importantly, they’re never done presenting us with the most top tier designs.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/5.png" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                          Sohel Akter
                          </h6>
                          <span className="author-details">
                          Program Manager, New Horizons Institute
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                    Never let me down in terms of quality, nor compromising my time.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/6.png" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                          Arif Haque
                          </h6>
                          <span className="author-details">
                          Founder, Exceeli eSports
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                    Young and skilled people producing vibrant and robust designs.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/7.png" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                          Shafiee Rahman
                          </h6>
                          <span className="author-details">
                          Founder, Red ViperZ Gaming
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                    Impressed with the Jersey they designed for us, and the time we received in was remarkable!
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/8.png" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                          Manoj Kasyap
                          </h6>
                          <span className="author-details">
                          Founder, Velocity Gaming
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>






                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoWithTestimonials;
