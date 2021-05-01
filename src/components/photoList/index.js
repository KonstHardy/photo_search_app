import React from "react";
import { useSelector } from "react-redux";

import "./photoList.css";

import PhotoCard from "./../photoCard";

const PhotoList = () => {
  const photos = useSelector((state) => state.photos);
  // console.log(photos);

  return (
    <div className="photoList">
      <div className="wrapper photoList__wrapper">
        {photos.length > 0 ? (
          photos.map((photo) => <PhotoCard photo={photo} key={photo.id} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default PhotoList;
