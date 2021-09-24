import React from "react";
import photo from "../../assets/projects/libro-fy.jpg";

function Portfolio(props) {
  const project = {
    name: "Project Name",
    description:
      "Recent projects with respective github and deployment links.",
  };
  return (
    <section>
      <div className="flip-card">
        <div className="image-container">
          <div class="flip-card-front">
            <img src={photo} alt="libro" />
          </div>
          <div class="flip-card-back">
            <h1>{project.name}</h1>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

//material UI
