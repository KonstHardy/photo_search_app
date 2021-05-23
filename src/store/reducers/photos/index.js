import {
  SEARCH_PHOTOS,
  FETCH_PHOTOS,
  CURRENT_PAGE,
} from "../../constants/photos";

const initialState = {
  photos: [],
  currentPage: 1,
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PHOTOS:
      // return {
      //   ...state,
      //   photos: action.payload,
      // };
      return { ...state, photos: [...state.photos, ...action.payload] };

    case FETCH_PHOTOS:
      // return { ...state, photos: action.payload };
      return { ...state, photos: [...state.photos, ...action.payload] };

    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
        // currentPage: state.currentPage,
      };

    default:
      return state;
  }
};

export default photoReducer;
