const initialState = {
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "APP_ACCESS_KEY": {
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
