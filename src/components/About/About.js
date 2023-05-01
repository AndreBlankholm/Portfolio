import React from "react";
import "./About.css";

function About() {
  return (
    <div className="container-header">
      <div className="introduction">
        <div className="proflie-image-container">
          <img
            className="profile-image"
            src={require("../../assests/images/Portfolio.png")}
            alt="Andre Blankolm's straight faced"
          ></img>
        </div>
        <div className="intro">
          <h2>Hello, I'm Andre Blankholm.</h2>
          <br />
          <h3>I am a University of Minnesota’s coding boot camp graduate.</h3>

          <div className="icon-div">
            <a
              href="https://www.credly.com/go/Z4p4SKu7BOWD9JIqYXUVKg"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="uofm-icon-image"
                src={require("../../assests/images/best-course-ever.png")}
                alt="Full Stack web Devlopment Icon from the University of Minnesota"
              ></img>
            </a>
          </div>
        </div>
      </div>

      <div className="container-about-me">
        <p className="about-me-header">About Me</p>

        <p className="about-ptags">
          I am currently looking for a career change into the Tech Industry that
          allows me to hone my critical thinking and analytical skills in this
          type of environment.
        </p>
        <p className="about-ptags">
          When you look at my decade’s long job history with the Minnesota
          Department of Transportation, please find that I am trainable and have
          a multi-year track record of meeting and or exceeding expectations
          which includes voluntary training and leadership programs. Thank you
          for taking the time to review my profile..
          <br></br>
        </p>
      </div>
    </div>
  );
}

export default About;
