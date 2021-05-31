import { toJson } from "unsplash-js";
import unsplash from "../../../api";

import { ADD_LIKE, REMOVE_LIKE } from "../../constants/like";

export function addLike(photoId) {
  console.log("photoId", photoId.photoId);

  return async (dispatch) => {
    try {
      await unsplash.photos
        .likePhoto(photoId.photoId)
        .then(toJson)
        .then((json) => {
          console.log("ADD_LIKE", json);
          dispatch({ type: ADD_LIKE, payload: json.results });
        });
    } catch (err) {
      console.log("Encountered an error with ADD_LIKE", err);
    }
  };
}
