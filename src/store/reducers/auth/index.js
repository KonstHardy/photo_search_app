import { GET_ACCESS_KEY } from "../../constants/auth";

const initialState = {
  // isAuth: false,
  isAuth: localStorage.getItem("BearerToken"),
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
