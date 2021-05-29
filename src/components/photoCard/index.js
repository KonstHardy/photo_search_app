import React from "react";
import "./photoCard.css";

const PhotoCard = (props) => {
  const { photo } = props;

  console.log(photo.user.first_name, photo.user.last_name);

  return (
    <div className="photoCard">
      <img
        className="photoCard__image"
        alt={photo.alt_description}
        src={photo.urls.regular}
      />
      <p className="photoCard__authorName">
        {photo.user.first_name} {photo.user.last_name}
      </p>
    </div>
  );
};

export default PhotoCard;
