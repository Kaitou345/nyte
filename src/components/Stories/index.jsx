import React from "react";

const Stories = () => {
  return (
    <div className="unique-stories">
      <div className="unique-stories--left">
        <h2 className="p1">
          Liberate your ideas <br />
          <span className="underline-animation">Elegantly</span>
        </h2>
        <button className="button-primary"><a href="/about">Learn More</a> </button>
        <div className="hero-socials">
          <a href="#0" className="icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#0" className="icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#0" className="icon">
            <i className="fab fa-behance"></i>
          </a>
        </div>
      </div>
      <div className="image">
        <img src="/img/stories.png" alt="" />
      </div>
    </div>
  );
};

export default Stories;
