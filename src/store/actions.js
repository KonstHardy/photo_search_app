import { SEARCH_PHOTO } from "./types";
import { Unsplash } from "./../api";

export function fetchPhotos(setSearchQuery) {
  return async (dispatch) => {
    const response = await Unsplash.search.getPhotos({
      query: setSearchQuery,
    });
    // const json = await response.json();
    // console.log(response.response.results);

    console.log(response);
    dispatch({ type: SEARCH_PHOTO, payload: response });
  };
}
