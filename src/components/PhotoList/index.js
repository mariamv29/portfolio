// import React, { useState } from "react";
// import  Modal  from "../Modal";

// const PhotoList = ({ category }) =>  {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [ currentProject, setCurrentProject
//     // github, 
//     // deployment
//    ] = useState();

//   //photo array
//   const [ projects ] = useState([
//     {
//       name: "libroFy",
//       category: "challenge",
//       github: "https://github.com/mariamv29/libro-fy.git",
//       deployment: "https://infinite-ravine-50293.herokuapp.com/",
//     },
//     {
//       name: "healthyCraves" ,
//       category: "challenge",
//       github: "https://github.com/mariamv29/healthy-craves.git",
//       deployment: "https://mariamv29.github.io/healthy-craves/",
//     },
//     {
//       name: " pizzaHut",
//       category: "challenge",
//       github: "https://github.com/mariamv29/libro-fy.git",
//       deployment: "https://obscure-hamlet-00557.herokuapp.com/",
//     },
//     {
//       name:  "budgetTracker ",
//       category: "challenge",
//       github: "https://github.com/mariamv29/libro-fy.git",
//       deployment: "https://rocky-forest-04357.herokuapp.com/",
//     },
//     {
//       name: "gitItDone" ,
//       category: "challenge",
//       github: "https://github.com/mariamv29/git-it-done.git",
//       deployment: "https://libro-fy.herokuapp.com",
//     },
//     {
//       name:  "taskinator ",
//       category: "challenge",
//       github: "https://github.com/mariamv29/taskinator.git",
//       deployment: "https://mariamv29.github.io/taskinator/",
//     },
//   ]);
  
//   const currentProjects = projects.filter((project) => project.category === category);

//   const toggleModal = (image, i) => {
//     setCurrentProject({ ...image, index: i});
//     setIsModalOpen(!isModalOpen);
//   };


//   return (
//     <div>
//        {isModalOpen && <Modal onClose={toggleModal} currentProject={currentProject} />}
//       <div className="flex-row">
//         {currentProjects.map((image, i) => (
//         <img
//         src={require(`../../assets/${category}/${i}.jpg`).default} 
//         key={image.name} 
//         alt={image.name} 
//         />
//    )) }
//     </div>
//     </div>
//   );
// }
// export default PhotoList;
