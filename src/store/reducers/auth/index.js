import { LOG_IN, LOG_OUT } from '../../constants/auth';

const initialState = {
  authentication: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return { ...state, authentication: true };
    }

    case LOG_OUT: {
      return { ...state, authentication: false };
    }

    default:
      return state;
  }
};

export default authReducer;
