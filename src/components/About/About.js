import React from "react";
import './About.css';


function About() {



  return (
    <>
      <div className="about">
        <p>About Me</p>
      </div>

      <div > 
        <ul>
          <li className="def">
            <img 
              alt="html svg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              style={{ height: "100px", width: "100px", borderRadius: "10%" }}
             
            />
            <img 
              alt="css svg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              style={{ height: "100px", width: "100px", borderRadius: "10%" }}
            />
            <img
              alt="javascript svg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              style={{ height: "100px", width: "100px", borderRadius: "10%" }}
            />
            <img
              alt="bootstrap svg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              style={{ height: "100px", width: "100px", borderRadius: "20%" }}
            />
            <img
              alt="materialui svg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
              style={{ height: "100px", width: "100px", borderRadius: "10%" }}
            />
          </li>
        </ul>
        <ul className="list">
            <li>
              <img
                alt="mongodb svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                style={{ height: "100px", width: "100px", borderRadius: "10%" }}
              />
              <img
                alt="express svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                style={{ height: "100px", width: "100px", borderRadius: "10%" }}
              />
              <img
                alt="react svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                style={{ height: "100px", width: "100px", borderRadius: "10%" }}
              />
              <img
                alt="node svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                style={{ height: "100px", width: "100px", borderRadius: "10%" }}
              />
              <img
                alt="mysql svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                style={{ height: "100px", width: "100px", borderRadius: "10%" }}
              />
            </li>
          </ul>
          <ul className="list">
            <li>
              <img
                alt="redux svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                style={{ height: "100px", width: "100px", borderRadius: "10%" }}
              />
              <img
                alt="jquery svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg"
                style={{ height: "100px", width: "100px", borderRadius: "10%" }}
              />
              <img
                alt="heroku svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg"
                style={{ height: "100px", width: "100px", borderRadius: "10%" }}
              />
              <img
                alt="git svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                style={{ height: "100px", width: "100px", borderRadius: "10%" }}
              />
              <img
                alt="npm svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                style={{ height: "100px", width: "100px", borderRadius: "10%" }}
              />
            </li>
          </ul>
      </div>
    </>
  );
}

export default About;
