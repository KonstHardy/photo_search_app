import { GET_ACCESS_KEY } from "../../constants/auth";

const initialState = {
  authentication: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCESS_KEY: {
      return { ...state, authentication: true };
    }

    default:
      return state;
  }
};

export default authReducer;
