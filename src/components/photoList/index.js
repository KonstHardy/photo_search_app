import React from "react";
import { useSelector } from "react-redux";

import "./photoList.css";

import PhotoCard from "../photoCard";
import Loader from "../loader";

const PhotoList = () => {
  const photos = useSelector((state) => state.photos.photos);

  return (
    <div className="photoList">
      <div className="wrapper photoList__wrapper">
        {photos.length > 0 ? (
          photos.map((photo) => <PhotoCard photo={photo} key={photo.id} />)
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default PhotoList;
