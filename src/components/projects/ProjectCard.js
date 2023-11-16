import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ img, langs, title, disc }) => {
  return (
    <div className="project-card">
      <img src={img} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{disc}</p>
      <div className="project-langs">
        {langs.map((lang) => (
          <span key={lang} className="lang-tag">
            {lang}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
