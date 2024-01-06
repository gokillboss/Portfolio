import React from "react";
import ProjectCard from "./ProjectCard";
import WhaleTrade from "./WhaleTrade.png";
import Worldle from "./Worldle.png";
import Nutrition from "./nutrition.png";
import { NavLink } from "react-router-dom";
import "./projectStyle.css";

const projects = [
  {
    img: WhaleTrade,
    langs: ["html", "css", "javascript", "react", "Express", "Node.js"],
    title: "Whale Trade",
    disc: "Paper trading web app",
  },
  {
    img: Worldle,
    langs: ["MUI", "css", "javascript", "Node.js", "React"],
    title: "Wordle",
    disc: "A Word guessing game",
  },
  {
    img: Nutrition,
    langs: ["html", "css", "javascript", "Node.js", "Koa.JS", "MySQL", "React"],
    title: "Food Trace",
    disc: "A web app tracking nutrition that User have eaten",
  },
];

function Projects() {
  return (
    <div className="project">
      <div className="top">
        <div data-aos="fade-down" className="left">
          <div className="">
            <span style={{ color: "#C778DD" }}>#</span>Projects
          </div>
        </div>

        <div data-aos="fade-down" className="line"></div>

        <div data-aos="fade-right" className="right">
       
        <span>
        <NavLink to="/projects">
            <span>View all ~~;</span>
          </NavLink>
        </span>
      
        </div>
      </div>

      {/* bottom */}
      <div data-aos="fade-up" className="body">
        {projects.map(({ img, langs, title, disc }, index) => (
          <ProjectCard
            key={index}
            img={img}
            langs={langs}
            title={title}
            disc={disc}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
