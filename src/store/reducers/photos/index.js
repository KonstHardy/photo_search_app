import {
  FETCH_SEARCH,
  FETCH_RANDOM,
  CURRENT_PAGE,
} from "../../constants/photos";

const initialState = {
  photos: [],
  currentPage: 1,
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH:
      // return {
      //   ...state,
      //   photos: action.payload,
      // };
      return { ...state, photos: [...state.photos, ...action.payload] };

    case FETCH_RANDOM:
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
