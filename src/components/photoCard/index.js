import React from "react";
import "./photoCard.css";

const PhotoCard = (props) => {
  const { photo } = props;
  // console.log(photo);

  return (
    <div className="photoCard">
      <img
        className="photoCard__image"
        alt={photo.alt_description}
        src={photo.urls.regular}
      />
    </div>
  );
};

export default PhotoCard;
