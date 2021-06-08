import { ADD_LIKE, REMOVE_LIKE } from "../../constants/like";

const initialState = {
  // like: false,
};

const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return {
        ...state,
        // like: true,
        // like: action.payload,
        likes: action.payload.likes,
        liked_by_user: action.payload.liked_by_user,
        // likeCounter: action.payload.likes,
        // likedByUser: action.payload.liked_by_user,
      };

    case REMOVE_LIKE:
      return {
        ...state,
        // like: false,
        // like: action.payload,
        likes: action.payload.likes,
        liked_by_user: action.payload.liked_by_user,
      };

    default:
      return state;
  }
};

export default likesReducer;
