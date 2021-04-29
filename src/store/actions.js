import { SEARCH_PHOTO } from "./types";

export const addSearchPhoto = (photos) => ({
  type: SEARCH_PHOTO,
  payload: photos,
});
