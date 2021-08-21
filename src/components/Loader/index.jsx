import React from "react";
import { useSelector } from "react-redux";

import styles from "./Loader.module.css";

export function Loader() {
  const modalActive = useSelector((state) => state.photoModal.showPhotoModal);

  return (
    <div
      className={
        modalActive ? `${styles.root} ${styles.rootModal}` : `${styles.root}`
      }
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
