import React from "react";
import IconLike from "../iconLike";
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
        <a
          className="author__link"
          href={photo.user.links.html}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="author__avatar"
            alt={photo.user.name}
            src={photo.user.profile_image.small}
          />
          <p className="author__name">{photo.user.name}</p>
        </a>
        <div className="author__like">
          <spam className="like__counter">{photo.likes}</spam>
          <IconLike />
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
