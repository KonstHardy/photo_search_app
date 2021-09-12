import {
  SEARCH_PHOTOS,
  FETCH_SEARCH_PHOTOS,
  FETCH_RANDOM_PHOTOS,
  GET_PHOTO_MODAL,
  REMOVE_PHOTO_MODAL,
} from '../../constants/photos';

import { ADD_LIKE, REMOVE_LIKE } from '../../constants/like';

const initialState = {
  photoList: [],
  photoModalData: null,
};

function mergeByProp(arr1, arr2, prop) {
  const map = new Map();

  arr1.forEach((item) => map.set(item[prop], item));
  arr2.forEach((item) => map.set(item[prop], { ...map.get(item[prop]), ...item }));

  return Array.from(map.values());
}

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PHOTOS:
      return {
        ...state,
        photoList: action.payload,
      };

    case FETCH_SEARCH_PHOTOS:
      return { ...state, photoList: [...state.photoList, ...action.payload] };

    case FETCH_RANDOM_PHOTOS:
      return {
        ...state,
        photoList: mergeByProp(state.photoList, action.payload, 'id'),
      };

    case GET_PHOTO_MODAL:
      return {
        ...state,
        photoModalData: action.payload,
      };

    case REMOVE_PHOTO_MODAL:
      return {
        ...state,
        photoModalData: null,
      };

    case ADD_LIKE:
      return {
        ...state,
        photoList: state.photoList.map((photo) => {
          if (photo.id === action.payload.id) {
            photo.likes = action.payload.likes;
            photo.liked_by_user = true;
          }
          return photo;
        }),
        photoModalData: action.payload,
      };

    case REMOVE_LIKE:
      return {
        ...state,
        photoList: state.photoList.map((photo) => {
          if (photo.id === action.payload.id) {
            photo.likes = action.payload.likes;
            photo.liked_by_user = false;
          }
          return photo;
        }),
        photoModalData: action.payload,
      };

    default:
      return state;
  }
};

export default photoReducer;
