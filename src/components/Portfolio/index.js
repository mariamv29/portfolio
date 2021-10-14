import React from "react";

function Portfolio() {
  const projects = [
    {
      name: "Farm-Go Market",
      src: require("../../assets/challenge/6.jpg").default,
      github: "https://github.com/mariamv29/farm-go.git",
      deployment: "https://farm-gomarket.herokuapp.com/",
    },
    {
      name: "Libro-Fy",
      src: require("../../assets/challenge/0.jpg").default,
      github: "https://github.com/mariamv29/libro-fy.git",
      deployment: "https://infinite-ravine-50293.herokuapp.com/",
    },
    {
      name: "Healthy Craves",
      src: require("../../assets/challenge/1.jpg").default,
      github: "https://github.com/mariamv29/healthy-craves.git",
      deployment: "https://mariamv29.github.io/healthy-craves/",
    },
    {
      name: "Pizza Hut",
      src: require("../../assets/challenge/2.jpg").default,
      github: "https://github.com/mariamv29/libro-fy.git",
      deployment: "https://obscure-hamlet-00557.herokuapp.com/",
    },
    {
      name: "Budget Tracker ",
      src: require("../../assets/challenge/3.jpg").default,
      github: "https://github.com/mariamv29/buget-tracker.git",
      deployment: "https://rocky-forest-04357.herokuapp.com/",
    },
    {
      name: "Model View Controller",
      src: require("../../assets/challenge/4.jpg").default,
      github: "https://github.com/mariamv29/model-view-controller",
      deployment: "https://model-view.herokuapp.com/",
    },
 
  ];
  return (
   <>
    <div className="container">
      <div className="cards" xs={2}
      > 
        {projects.map(({ name, src, github, deployment }) => (
          <ul className="projects" key={{ name, src, github, deployment }}>
            <img
              src={src}
              alt={name}
              style={{ width: "380px", height: "240px"}}
            ></img>
   
            <div className="portfolio-links">
                <h4 className="title">{name}</h4>
              <a href={github} className="git">
                Github
              </a>
              <a href={deployment} className="demo">
                Website
              </a>
            </div>
          </ul>
        
     
        ))}
   </div>   
      </div>
        </>
  );
}
export default Portfolio;
