import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who We Are ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  We are Nyte Digital - the solution to your digital designing
                  problems. In a world which runs on digital marketing, the
                  internet is a goldmine of opportunities for all kinds of
                  businesses worldwide. This is where we come in, from providing
                  various designing ranging from logo designing, poster
                  formation, VFX animation, etc. we have got you covered. Not
                  only that, our proficient team of designers are skilled in
                  providing services like designing brochures, making
                  illustrations etc. We promise to not only meet your demands
                  but also to fulfil with them with excellence and competence.
                  We guarantee to ensure quality at affordable prices but making
                  sure it is fulfilled in the given time range. So what are you
                  waiting for? Establish your digital presence by availing any
                  of services.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
