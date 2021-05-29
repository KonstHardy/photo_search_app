import React from "react";
import "./photoCard.css";

const PhotoCard = (props) => {
  const { photo } = props;

  return (
    <div className="photoCard">
      <img
        className="photoCard__image"
        alt={photo.alt_description}
        src={photo.urls.regular}
      />
      <div className="photoCard__author">
        <img
          className="author__avatar"
          alt={photo.user.name}
          src={photo.user.profile_image.small}
        />
        <p className="author__name">{photo.user.name}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
