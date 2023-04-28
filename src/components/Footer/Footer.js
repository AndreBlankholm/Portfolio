import React from "react";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <>
      <div>
        <div className="social-icons">
          <GitHubIcon /> <LinkedInIcon />
        </div>
        <div className="footer-container">
          <ul className="icon-container">
            <li className="def">
              <img
                alt="html svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                className="icon"
              />
            </li>
            <li>
              <img
                alt="css svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                className="icon"
              />
            </li>
            <li>
              <img
                alt="javascript svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                className="icon"
              />
            </li>
            <li>
              <img
                alt="bootstrap svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                className="icon"
              />
            </li>
            <li>
              <img
                alt="materialui svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                className="icon"
              />
            </li>

            <li>
              <img
                alt="mongodb svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                className="icon"
              />
            </li>
            <li>
              <img
                alt="express svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                className="icon"
              />
            </li>
            <li>
              <img
                alt="react svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                className="icon"
              />
            </li>
            <li>
              <img
                alt="node svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                className="icon"
              />
            </li>
            <li>
              <img
                alt="mysql svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                className="icon"
              />
            </li>
            <li>
              <img
                alt="redux svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                className="icon"
              />
            </li>
            <li>
              <img
                alt="jquery svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg"
                className="icon"
              />
            </li>
            <li>
              <img
                alt="heroku svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg"
                className="icon"
              />
            </li>
            <li>
              <img
                alt="git svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                className="icon"
              />
            </li>
            <li>
              <img
                alt="npm svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                className="icon"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
