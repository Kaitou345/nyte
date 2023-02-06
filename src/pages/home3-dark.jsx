import React from "react";
import AboutUs2 from "../components/About-us2";
import BlogsThreeColumn1 from "../components/Blogs-three-column1";
import CallToAction from "../components/Call-to-action";
import Clients1 from "../components/Clients1";
import Footer from "../components/Footer";
import IntroWithSlider3 from "../components/Intro-with-slider3";
import Navbar from "../components/Navbar";
import NumbersWithVideo from "../components/Numbers-with-video";
import Services3 from "../components/Services3";
import Testimonials1 from "../components/Testimonials1";
import Works1Slider from "../components/Works1-slider";
import Works2Slider from "../components/Works2-slider";
import DarkTheme from "../layouts/Dark";

const Homepage3 = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider3 />
      <AboutUs2 skillsTheme="dark" />
      <Services3 />
      <NumbersWithVideo />
      <Works1Slider subBG />
      <Testimonials1 />
      <Clients1 theme="dark" />
      <CallToAction theme="dark" />
      <Footer />
    </DarkTheme>
  );
};

export default Homepage3;
