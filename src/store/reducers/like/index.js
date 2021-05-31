import { ADD_LIKE, REMOVE_LIKE } from "../../constants/like";

const initialState = {
  like: false,
};

const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return {
        ...state,
        like: action.payload,
      };

    default:
      return state;
  }
};

export default likesReducer;
