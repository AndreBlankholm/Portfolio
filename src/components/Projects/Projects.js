import React, { useState } from "react";
import "./Projects.css";
import Project from "../Project/Project";
import Modal from "../Modal/Modal";

function Projects() {
  const [currentProject, setCurrentProject] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Everything Pizza",
      img: "everything-pizza.png",
      description:
        "A riff on social-media applications that already exist for other topics—lets users connect with each other based on their love of pizza. Client existing codebase with an API layer, using MongoDB as the database system, In  Everything Pizza, users can share and discuss their dream pizza-topping combinations.",
      alt: "computer screenshot of deployed application",
      tools: "JavaScript, Node & Express, MySQL, Bootstrap, Handlebars.js",
      github: "https://github.com/AndreBlankholm/Pizza",
      deployment: "https://stormy-harbor-72824.herokuapp.com/",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      img: "weather-dash.png",
      description:
        "Weather Dashboard that you can input a city and see current and future 5-day weather conditions for that city with icons. Also includes Humidity, Wind Speed and UV Index.",
      alt: "computer screenshot of deployed application",
      tools: "JavaScript, Node & Express, MySQL, Bootstrap, Handlebars.js",
      github: "https://github.com/AndreBlankholm/Pizza",
      deployment: "https://andreblankholm.github.io/weather-dashboard/",
    },
    {
      id: 3,
      title: "github-opensource-directory",
      img: "git-it-done.png",
      alt: "goodbye",
      description:
        "A web app that will search GitHub for open source projects, display them and the open issues",
      tools: "MySQL, Bootstrap, Handlebars.js",
      github: "https://andreblankholm.github.io/github-opensource-directory/",
      deployment: "N/A",
    },
    {
      id: 4,
      title: "Trip Consultant",
      img: "trip-consultant.png",
      alt: "computer screenshot of deployed application",
      description:
        "",
      tools: "Javascript, Tailwind CSS, AviationStack API, OpenWeather API",
      github: "emmazart/trip-consultant",
      deployment: "https://emmazart.github.io/trip-consultant/",
    },
  ];

  function toggleModal(id) {
    // loops through and finds the porject.id that was sent
    var selectedProject = projects.find((p) => {
      return p.id === id;
    });
    console.log(selectedProject);
    setCurrentProject(selectedProject);
    setIsModalOpen(!isModalOpen);
  }

  return (
    <section className="container-vh">
      <div className="push">
        <div className="portfolio">
          {isModalOpen && (
            <Modal currentProject={currentProject} onClose={toggleModal} />
          )}
          {projects.map((project, index) => (
            <Project
              key={index}
              project={project}
              onCardClicked={toggleModal}
            ></Project>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
