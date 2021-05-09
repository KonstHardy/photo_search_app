import { GET_ACCESS_KEY } from "../../types";

const initialState = {
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCESS_KEY: {
      return { ...state, isAuth: action.payload };
    }

    default:
      return state;
  }
};

export default authReducer;
