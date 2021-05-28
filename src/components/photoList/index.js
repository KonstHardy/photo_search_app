import React from "react";
import { useSelector } from "react-redux";

import "./photoList.css";

import PhotoCard from "../photoCard";
import Loader from "../loader";

const PhotoList = () => {
  const photos = useSelector((state) => state.photos.photos);
  const loading = useSelector((state) => state.loader.loading);

  return (
    <div className="photoList">
      <div className="wrapper photoList__wrapper">
        {photos.map((photo) => (
          <PhotoCard photo={photo} key={photo.id} />
        ))}
      </div>
      {loading ? <Loader /> : null}
    </div>
  );
};

export default PhotoList;
