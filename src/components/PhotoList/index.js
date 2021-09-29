import React, { useState } from "react";
import libroFy from "../../assets/challenge/0.jpg";
import healthyCraves from "../../assets/challenge/1.jpg";
import pizzaHut from "../../assets/challenge/2.jpg";
import budgetTracker from "../../assets/challenge/3.jpg";
import gitItDone from "../../assets/challenge/4.jpg";
import taskinator from "../../assets/challenge/5.jpg";
// import Portfolio from '../../components/Portfolio'

function PhotoList() {
  const [ currentPhoto, setCurrentPhoto
    // github, 
    // deployment
   ] = useState();
  //photo array
  const [ projects ] = useState([
    {
      photo: { libroFy },
      // github: "https://github.com/mariamv29/libro-fy.git",
      // deployment: "https://infinite-ravine-50293.herokuapp.com/",
    },
    {
      photo: { healthyCraves },
      // github: "https://github.com/mariamv29/healthy-craves.git",
      // deployment: "https://mariamv29.github.io/healthy-craves/",
    },
    {
      photo: { pizzaHut },
      // github: "https://github.com/mariamv29/libro-fy.git",
      // deployment: "https://obscure-hamlet-00557.herokuapp.com/",
    },
    {
      photo: { budgetTracker },
      // github: "https://github.com/mariamv29/libro-fy.git",
      // deployment: "https://rocky-forest-04357.herokuapp.com/",
    },
    {
      photo: { gitItDone },
      // github: "https://github.com/mariamv29/git-it-done.git",
      // deployment: "https://libro-fy.herokuapp.com",
    },
    {
      photo: { taskinator },
      // github: "https://github.com/mariamv29/taskinator.git",
      // deployment: "https://mariamv29.github.io/taskinator/",
    },
  ]);
  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div className="photo-row">
      {photo.map((iteam) => (
        // projects.push( <Portfolio className="projects">);
        //    projects.push(<div key={i}>
        <img key={iteam} src={iteam.photo} alt="example" />
      ))}

    </div>
  );
}
export default PhotoList;
