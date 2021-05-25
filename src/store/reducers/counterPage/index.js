import {
  SET_CURRENT_PAGE,
  RESET_CURRENT_PAGE,
} from "../../constants/counterPage";

const initialState = {
  currentPage: 1,
};

const pageCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case RESET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
};

export default pageCounterReducer;
