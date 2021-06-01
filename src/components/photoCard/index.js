import React from "react";
import "./photoCard.css";
import IconLike from "../iconLike";

const PhotoCard = (props) => {
  const { photo } = props;

  console.log("photo.id", photo.id);

  return (
    <div className="photoCard">
      <div className="photoCard__content photoCard__content-top">
        <time className="content__date">{photo.created_at}</time>
      </div>
      <img
        className="photoCard__image"
        alt={photo.alt_description}
        src={photo.urls.regular}
      />
      <div className="photoCard__content photoCard__content-bottom">
        <a
          className="content__author"
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
        <div className="content__like">
          <span className="like__counter">{photo.likes}</span>
          <IconLike photoId={photo.id} />
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
