import React from "react";
import Link from "next/link";
import {GoPencil} from "react-icons/go"
import {BsFillPlayCircleFill, BsKeyboardFill} from "react-icons/bs"
import {HiCubeTransparent, HiCode} from "react-icons/hi"
import {RiBrushFill} from "react-icons/ri"


const Services2 = () => {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="row rone">
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".4s">
            <div className="mas-item">
              
              <span> <GoPencil /></span>
              <h6>
                Still <br /> Graphics
              </h6>
              <div className="text-right">
                {/* <Link href="/about/about-dark">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link> */}
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
            <span><BsFillPlayCircleFill /></span>
              <h6>
                Motion <br /> Graphics
              </h6>
              <div className="text-right">
                {/* <Link href="/about/about-dark">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link> */}
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
            <span><HiCubeTransparent /></span>
              <h6>
                3D <br /> Designing
              </h6>
              <div className="text-right">
                {/* <Link href="/about/about-dark">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link> */}
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
        </div>
        <div className="row rtwo">
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
            <span><RiBrushFill /></span>
              <h6>
                Digital <br /> Art
              </h6>
              <div className="text-right">
                {/* <Link href="/about/about-dark">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link> */}
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
            <span><BsKeyboardFill /></span>
              <h6>
                Content <br /> Writing
              </h6>
              <div className="text-right">
                {/* <Link href="/about/about-dark">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link> */}
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
            <span><HiCode /></span>
              <h6>
                Web <br /> Development
              </h6>
              <div className="text-right">
                {/* <Link href="/about/about-dark">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link> */}
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2;
