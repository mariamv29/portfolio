import React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import PhotoList from "../PhotoList";
// import photo from "../../assets/challenge/0.jpg"

function Portfolio() {
  const projects = [
    {
      name: "Libro-Fy",
      src: require("../../assets/challenge/0.jpg").default,
      github: "https://github.com/mariamv29/libro-fy.git",
      deployment: "https://infinite-ravine-50293.herokuapp.com/",
    },
    {
      name: "healthyCraves",
      src: require("../../assets/challenge/1.jpg").default,
      github: "https://github.com/mariamv29/healthy-craves.git",
      deployment: "https://mariamv29.github.io/healthy-craves/",
    },
    {
      name: " pizzaHut",
      src: require("../../assets/challenge/2.jpg").default,
      github: "https://github.com/mariamv29/libro-fy.git",
      deployment: "https://obscure-hamlet-00557.herokuapp.com/",
    },
    {
      name: "budgetTracker ",
      src: require("../../assets/challenge/3.jpg").default,
      github: "https://github.com/mariamv29/libro-fy.git",
      deployment: "https://rocky-forest-04357.herokuapp.com/",
    },
    {
      name: "gitItDone",
      src: require("../../assets/challenge/4.jpg").default,
      github: "https://github.com/mariamv29/git-it-done.git",
      deployment: "https://libro-fy.herokuapp.com",
    },
    {
      name: "taskinator ",
      src: require("../../assets/challenge/5.jpg").default,
      github: "https://github.com/mariamv29/taskinator.git",
      deployment: "https://mariamv29.github.io/taskinator/",
    },
  ];
  return (
  

    
  <div>
      <ul className="navabs">
      {projects.map(({name, src, github}) => (
        <li className="navem" key={{name, src, github}}>
          <a
            href={github}
            className="hello">
          </a>
          <h1>{name}</h1>
          <img src={src} alt={name}></img>
        </li>
      ))}
    </ul>
      </div>
 
  );
}
export default Portfolio;

