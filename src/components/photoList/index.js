import React from "react";
import "./photoList.css";

import PhotoCard from "./../photoCard";

const PhotoList = (props) => {
  const { photos } = props;
  // console.log(photos);

  return (
    <div className="photoList">
      <div className="wrapper photoList__wrapper">
        {photos.map((photo) => (
          <PhotoCard photo={photo} key={photo.id} />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
