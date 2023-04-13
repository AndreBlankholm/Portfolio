import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="photo-and-text-container">
        <div className="introduction">
          <img
            className="profile-image"
            src={require("../../assests/images/Portfolio.png")}
            alt="Andre Blankolm smiling at you"
          ></img>
          <h2>Hello, I'm Andre</h2>
        </div>

        <div>
          <p className="about-me">About Me</p>

          <p className="about-ptags">
            I am a recent web developer graduate from the University of
            Minnesota’s coding boot camp with an earned certificate in
            full-stack web development. The UofM’s coursework includes 240 hours
            of individual and group activities. The bootcamp was a great
            learning experience and I had a lot of fun knowing that I can
            achieve tangible results in the amount of time allowed.
          </p>
          <p>
            I am currently looking for a career change into the Tech Industry
            that allows me to hone my critical thinking and analytical skills in
            this type of environment. When you look at my decade’s long job
            history with the Minnesota Department of Transportation, please find
            that I am trainable and have a multi-year track record of meeting
            and or exceeding expectations which includes voluntary training and
            leadership programs. I feel that this position is a great first step
            forward in my career and I'll give my best to contribute and grow
            together with the company. I want to work hard and provide value to
            the company I am placed with, learn the goals, and become a team
            member that helps to achieve those goals. Thank you for taking the
            time to review my profile..
          </p>
          <p>Best, Andre Blankholm</p>
        </div>
      </div>
    </div>
  );
}

export default About;
