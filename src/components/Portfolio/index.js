import React from "react";
import photo from '../../assets/projects/libro-fy.jpg'
function Portfolio() {
    
  return (
    <div className="card">
      <div className="image-container">
        <img />
      </div>
      <div className="content">
        <img src={photo}
        alt="libro"
        className="img-thumbnail mx-1"
     />
      </div>
    </div>
  );
}

export default Portfolio;