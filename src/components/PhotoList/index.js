import React  from "react";

import photo from "../../assets/small/taskinator.jpg";

function PhotoList() {
//   const [photos] = useState([
//     {
//       name: "Taskinator",
//       descripton: "see github/deployment",
//     },
//     {
//       name: "Get it Done",
//       descripton: "see ",
//     },
 // ]);
  return (
    <div>
      <img src={photo} height="140" alt="challenge example" />
    </div>
  );
}

export default PhotoList;
