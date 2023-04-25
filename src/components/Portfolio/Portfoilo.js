import React from "react";
import "./Portfolio.css";
import Project from "../Project/Project";


function Portfolio() {

  const projects = [
    {
      title: "Everything Pizza",
      img_folder: "everything-pizza.png",
      description: "lorem itssum",
      alt: "hello",
      tools: "JavaScript, Node & Express, MySQL, Bootstrap, Handlebars.js",

    },
    {
      title: "Weather Dashboard",
      img_folder: "weather-dash.png",
      description: "lorem itssum weather deashboard extra stuff always and forever",
      alt: "",
      tools: "JavaScript, Node & Express, MySQL, Bootstrap, Handlebars.js",
    },
    {
      title: "Everything Pizza",
      img_folder: "git-it-done.png",
      alt: "goodbye",
      description: "lorem itssum  everything pizza stuff gagas me with a spoon",
      tools: "MySQL, Bootstrap, Handlebars.js",
    },
  ];

  return (
    <div className="portfolio">
    {projects.map((project, index) => (
      <Project project={project}></Project>
    ))}
    </div>
  );
}

export default Portfolio;
