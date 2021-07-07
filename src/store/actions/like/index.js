import { toJson } from "unsplash-js";
import unsplash from "../../../api";

import { ADD_LIKE, REMOVE_LIKE } from "../../constants/like";

export function addLike(photoId) {
  return async (dispatch) => {
    try {
      await unsplash.photos
        .likePhoto(photoId)
        .then(toJson)
        .then((json) => {
          console.log("ADD_LIKE", json);
          console.log("like counter", json.photo.likes);
          console.log("json.photo", json.photo);
          dispatch({ type: ADD_LIKE, payload: json.photo });
        });
    } catch (err) {
      console.log("Encountered an error with ADD_LIKE", err);
    }
  };
}

export function removeLike(photoId) {
  return async (dispatch) => {
    try {
      await unsplash.photos
        .unlikePhoto(photoId)
        .then(toJson)
        .then((json) => {
          console.log("REMOVE_LIKE", json);
          console.log("like counter", json.photo.likes);
          dispatch({ type: REMOVE_LIKE, payload: json.photo });
        });
    } catch (err) {
      console.log("Encountered an error with REMOVE_LIKE", err);
    }
  };
}
