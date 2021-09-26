import React, { useState } from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";
import PhotoList from "../PhotoList";

function Portfolio() {
  const [projects] = useState([
    {
      name: "projects",
      description:
        "Recent projects with respective github and deployment links.",
    },
  ]);

  const [setCurrentProjects] = useState(projects[0]);

  return (
    <section>
      <div className="flip-card">
        <div className="image-container">
          <div className="flip-card-front">
            <PhotoList />
          </div>
          <div class="flip-card-back">
            <h1>{projects.name}</h1>
            <p>{projects.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
