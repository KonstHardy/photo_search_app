import {
  SEARCH_PHOTO,
  FETCH_SEARCH,
  FETCH_RANDOM,
} from "../../constants/photos";

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

    default:
      return state;
  }
};

export default photoReducer;
