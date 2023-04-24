import React, { useState } from "react";
import "./Portfolio.css";

function Portfolio() {

    
  const projects = [
    {
      title: "Everything Pizza",
      img_folder: "everything-pizza.png",
      description: "lorem itssum",
      tools: "JavaScript, Node & Express, MySQL, Bootstrap, Handlebars.js",
    },
    {
      title: "Weather Dashboard",
      img_folder: "weather-dash.png",
      description: "lorem itssum weather deashboard extra stuff always and forever",
      tools: "JavaScript, Node & Express, MySQL, Bootstrap, Handlebars.js",
    },
    {
      title: "Everything Pizza",
      img_folder: "git-it-done",
      description: "lorem itssum  everything pizza stuff gagas me with a spoon",
      tools: "MySQL, Bootstrap, Handlebars.js",
    },
  ];

  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
    </div>
  );
}

export default Portfolio;
