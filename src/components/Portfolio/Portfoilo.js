import React from "react";
import "./Portfolio.css";
import Project from "../Project/Project";


function Portfolio() {

  const projects = [
    {
      title: "Everything Pizza",
      img_folder: "everything-pizza.png",
      description: "A riff on social-media applications that already exist for other topics—lets users connect with each other based on their love of pizza. Client existing codebase with an API layer, using MongoDB as the database system, In  Everything Pizza, users can share and discuss their dream pizza-topping combinations.",
      alt: "computer screenshot of deployed application",
      tools: "JavaScript, Node & Express, MySQL, Bootstrap, Handlebars.js",
      github: "https://github.com/AndreBlankholm/Pizza",
      deployment: "https://stormy-harbor-72824.herokuapp.com/"
    },
    {
      title: "Weather Dashboard",
      img_folder: "weather-dash.png",
      description: "Weather Dashboard that you can input a city and see current and future 5 day weather conditions for that city with icons. Also includes Humidity, Wind Speed and UV Index.",
      alt: "computer screenshot of deployed application",
      tools: "JavaScript, Node & Express, MySQL, Bootstrap, Handlebars.js",
      github: "https://github.com/AndreBlankholm/Pizza",
      deployment: "https://andreblankholm.github.io/weather-dashboard/"
    },
    {
      title: "github-opensource-directory",
      img_folder: "git-it-done.png",
      alt: "goodbye",
      description: "A web app that will search GitHub for open source projects, dispaly them and the open issues",
      tools: "MySQL, Bootstrap, Handlebars.js",
      github: "https://andreblankholm.github.io/github-opensource-directory/",
      deployment: ""
    },
    {
      title: "Trip Consultant",
      img_folder: "trip-consultant.png",
      alt: "computer screenshot of deployed application",
      description: "This application allows users to enter a flight number and destination city for their trip and have flight & weather information returned. Due to incompatibility in the security of the AviationStack API fetch calls, that element does not currently work on live deployment.",
      tools: "Javascript, Tailwind CSS, AviationStack API, OpenWeather API",
      github: "emmazart/trip-consultant",
      deployment: "https://emmazart.github.io/trip-consultant/"
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
