import {
  SEARCH_PHOTO,
  FETCH_SEARCH,
  FETCH_RANDOM,
} from "../../constants/photos";

import { ADD_LIKE, REMOVE_LIKE } from "../../constants/like";

const initialState = {
  photos: [],
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PHOTO:
      return {
        ...state,
        photos: action.payload,
      };

    case FETCH_SEARCH:
      return { ...state, photos: [...state.photos, ...action.payload] };

    case FETCH_RANDOM:
      return { ...state, photos: [...state.photos, ...action.payload] };

    case ADD_LIKE:
      return {
        ...state,
        photos: state.photos.map((photo) => {
          if (photo.id === action.payload.id) {
            photo.likes = action.payload.likes;
            photo.liked_by_user = true;
          }
          return photo;
        }),
      };

    case REMOVE_LIKE:
      return {
        ...state,
        photos: state.photos.map((photo) => {
          if (photo.id === action.payload.id) {
            photo.likes = action.payload.likes;
            photo.liked_by_user = false;
          }
          return photo;
        }),
      };

    default:
      return state;
  }
};

export default photoReducer;
