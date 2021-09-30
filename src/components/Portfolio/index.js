import React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import PhotoList from "../PhotoList";

function Portfolio() {
  const projects = [
    {
      name: "libroFy",
      src: "../../assets/challenge/0.jpg",
      github: "https://github.com/mariamv29/libro-fy.git",
      deployment: "https://infinite-ravine-50293.herokuapp.com/",
    },
    {
      name: "healthyCraves",
      src: "../../assets/challenge/1.jpg",
      github: "https://github.com/mariamv29/healthy-craves.git",
      deployment: "https://mariamv29.github.io/healthy-craves/",
    },
    {
      name: " pizzaHut",
      src: "../../assets/challenge/2.jpg",
      github: "https://github.com/mariamv29/libro-fy.git",
      deployment: "https://obscure-hamlet-00557.herokuapp.com/",
    },
    {
      name: "budgetTracker ",
      src: "../../assets/challenge/3.jpg",
      github: "https://github.com/mariamv29/libro-fy.git",
      deployment: "https://rocky-forest-04357.herokuapp.com/",
    },
    {
      name: "gitItDone",
      src: "../../assets/challenge/4.jpg",
      github: "https://github.com/mariamv29/git-it-done.git",
      deployment: "https://libro-fy.herokuapp.com",
    },
    {
      name: "taskinator ",
      src: "../../assets/challenge/5.jpg",
      github: "https://github.com/mariamv29/taskinator.git",
      deployment: "https://mariamv29.github.io/taskinator/",
    },
  ];
  return (
  
    
    <Card sx={{ maxWidth: 345 }}>
      {projects.map(({src, name }) => (
        <CardMedia
          component="img"
          height="140"
          image={{src}.default}
          alt={name}
          
        />
      //   <CardActions>
      //  <a href={github}</a> 
      //   <Button size="small">Learn More</Button>
      // </CardActions>
      ))}

   </Card>
 
  );
}
export default Portfolio;

