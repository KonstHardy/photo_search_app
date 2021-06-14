import React from "react";

import "./photoCard.css";

import IconLike from "../icons/iconLike";
import IconDownload from "../icons/iconDownload";

const PhotoCard = (props) => {
  const { photo } = props;

  // console.log("LIKES", photo.like);

  console.log("photo.id", photo.id);
  console.log("photo.liked_by_user", photo.liked_by_user);

  return (
    <div className="photoCard">
      <div className="photoCard__content photoCard__content-top">
        <time className="content__date">
          {new Date(photo.created_at).toLocaleString()}
        </time>
        <a
          className="content_download"
          href={`${photo.links.download}?force=true`}
          download
          tabIndex="-1"
        >
          <IconDownload />
        </a>
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
          <IconLike photoId={photo.id} photoLike={photo.liked_by_user} />
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
