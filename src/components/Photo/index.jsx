import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./Photo.module.css";

import IconLike from "../icons/IconLike";
import IconDownload from "../icons/IconDownload";

export default function Photo(props) {
  const modalActive = useSelector((state) => state.photoModal.showPhotoModal);

  const { photo } = props;
  const { id } = photo;

  return (
    <div className={styles.photo}>
      <div
        className={
          modalActive
            ? `${styles.content}  ${styles.contentTop} ${styles.contentModal} ${styles.contentTopModal}`
            : `${styles.content} ${styles.contentTop}`
        }
      >
        <time className={styles.date}>
          {new Date(photo.created_at).toLocaleString()}
        </time>
        <a
          className={styles.download}
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
              ? `${styles.image} ${styles.imageModal}`
              : `${styles.image} `
          }
          alt={photo.alt_description}
          src={photo.urls.regular}
        />
      </Link>
      <div
        className={
          modalActive
            ? `${styles.content} ${styles.contentBottom} ${styles.contentModal} ${styles.contentBottomModal}`
            : `${styles.content} ${styles.contentBottom}`
        }
      >
        <a
          className={styles.author}
          href={photo.user.links.html}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.authorAvatar}
            alt={photo.user.name}
            src={photo.user.profile_image.small}
          />
          <p className={styles.authorName}>{photo.user.name}</p>
        </a>
        <div className={styles.likes}>
          <span className={styles.likesCounter}>{photo.likes}</span>
          <IconLike photoId={photo.id} photoLike={photo.liked_by_user} />
        </div>
      </div>
    </div>
  );
}
