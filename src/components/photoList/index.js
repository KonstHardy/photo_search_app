import React from "react";
import "./photoList.css";

const PhotoList = (props) => {
  const { photos } = props;
  // console.log(photos);

  return (
    <div className="photoList">
      <div className="wrapper photoList__wrapper">
        {photos.map((photo) => (
          <div className="photo-card" key={photo.id}>
            <img
              className="photo-card__image"
              alt={photo.alt}
              src={photo.src}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
