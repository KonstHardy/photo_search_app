import { GET_ACCESS_KEY } from "../../constants/auth";

const initialState = {
  authentication: false,
  // isAuth: localStorage.getItem("BearerToken"),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCESS_KEY: {
      // return { ...state, isAuth: action.payload };
      return { ...state, authentication: true };
    }

    default:
      return state;
  }
};

export default authReducer;
