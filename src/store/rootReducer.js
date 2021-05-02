import { SEARCH_PHOTOS, FETCH_PHOTOS } from "./types";

const initialState = {
  photos: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PHOTOS:
      return { ...state, photos: action.payload };
    // return { ...state, photos: [...state.photos, ...action.payload] };

    case FETCH_PHOTOS:
      // return { ...state, photos: action.payload };
      return { ...state, photos: [...state.photos, ...action.payload] };

    default:
      return state;
  }
};
