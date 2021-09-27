import React  from "react";
import photo from "../../assets/small/challenges/taskinator.jpg";

function PhotoList() {
  const currentChallenge = [
    {
      name: "project",
      description:
      "Recent projects with respective github and deployment links.",
    },
  ];
  return (
    <div>
      
      <img src={photo} height="140"  alt="challenge example" />
      <h1>{currentChallenge.name}</h1>
      <p>{currentChallenge.description}</p>
    </div>
  );
}

export default PhotoList;
