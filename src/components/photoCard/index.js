import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import "./photoCard.css";

import IconLike from "../icons/iconLike";
import IconDownload from "../icons/iconDownload";

import { hideModal } from "../../store/actions/modal";
import { clearPhotoById } from "../../store/actions/photos";

const PhotoCard = (props) => {
  const modalActive = useSelector((state) => state.modal.showModal);

  const { photo } = props;
  const { id } = photo;

  const history = useHistory();
  const dispatch = useDispatch();

  const handleHideModal = () => {
    dispatch(hideModal());
    dispatch(clearPhotoById());
    history.goBack();
  };

  return (
    <div className="photoCard">
      <div
        className={
          modalActive
            ? "photoCard__content photoCard__content-top photoCard__content-topPreview"
            : "photoCard__content photoCard__content-top"
        }
      >
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
      <Link to={`/gallery/${id}`}>
        <img
          className={
            modalActive
              ? "photoCard__image photoCard__imagePreview"
              : "photoCard__image"
          }
          alt={photo.alt_description}
          src={photo.urls.regular}
        />
      </Link>
      <div
        className={
          modalActive
            ? "photoCard__content photoCard__content-bottom photoCard__content-bottomPreview"
            : "photoCard__content photoCard__content-bottom"
        }
      >
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
