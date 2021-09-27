import React from 'react';

function PhotoList(challenge) {


  const photos = [
    {
      name: "Libro-Fy",
      GitHub: "https://github.com/mariamv29/libro-fy.git",
      deployment: "https://libro-fy.herokuapp.com"
    },
    {
      name: "Healthy Craves",
      GitHub: "https://github.com/mariamv29/healthy-craves.git",
      deployment: "https://mariamv29.github.io/healthy-craves/"
    },
    {
      name: "Pizza Hut",
      GitHub: "https://github.com/mariamv29/libro-fy.git",
      deployment: "https://libro-fy.herokuapp.com"
    },
    {
      name: "Budget Tracker",
      GitHub: "https://github.com/mariamv29/libro-fy.git",
      deployment: "https://libro-fy.herokuapp.com"
    },
  ];

  const currentPhotos = photos.filter((photo) => photo.challenge === challenge);

  // const setCurrentPhoto = (image, i) => {
  //   ({ ...image, index: i });
  // };

  return (
    <div>
     
     <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${challenge}/${i}.jpg`).default}
            alt={image.name}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoList;
