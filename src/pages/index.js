import React, { useState } from "react";
import BlcSec from "../components/Blc-sec";
import CallToAction from "../components/Call-to-action";
import Clients1 from "../components/Clients1";
import Footer from "../components/Footer";
import IntroWithSlider2 from "../components/Intro-with-slider2";
import Navbar from "../components/Navbar";
import PortfolioCustomColumn from "../components/Portfolio-custom-column";
import Services2 from "../components/Services2";
import SkillsCircle from "../components/Skills-circle";
import VideoWithTestimonials from "../components/Video-with-testimonials";
import LightTheme from "../layouts/Light";
import Team1 from "../components/Team1";
import Stories from "../components/Stories";

const Homepage2 = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const [theme, setTheme] = useState("");

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
        setTheme("themeL");
      } else {
        navbar.classList.remove("nav-scroll");
        setTheme("themeD");
      }
    });
  }, [navbarRef.theme]);

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme={theme} />
      {/* <IntroWithSlider2 /> */}
      <Stories />
      <BlcSec />
      <Services2 />
      <VideoWithTestimonials />
      <SkillsCircle theme="light" subBG />
      <Clients1 theme="light" subBG />
      {/* <PortfolioCustomColumn column={3} filterPosition="center" /> */}
      <Team1 />
      <CallToAction theme="light" />
      <Footer />
    </LightTheme>
  );
};

export default Homepage2;
