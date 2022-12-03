import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillsCircle = ({ subBG, theme }) => {
  const cpStyle = {
    path: {
      stroke: "#1164fe",
    },
    trail: {
      stroke: theme ? (theme == "dark" ? "#0f1218" : "#fff") : "",
    },
    text: {
      fill: theme ? (theme == "dark" ? "#ffffff" : "#1164fe") : "",
      fontSize: "24px",
    },
  };
  return (
    <section className={`skills-circle pt-50 pb-50 ${subBG ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="">
              <div className="row">
                <div className="col-md-6">
                  <div className="item wow fadeInLeft" data-wow-delay=".6">
                    <div className="skill">
                      <CircularProgressbar
                        value={85}
                        strokeWidth={2}
                        text={`${85}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Response</span>
                      <h6>Time</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={90}
                        strokeWidth={2}
                        text={`${90}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Client</span>
                      <h6>Satisfaction</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCircle;
