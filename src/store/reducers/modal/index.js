import { MODAL_SHOW, MODAL_HIDE } from "../../constants/modal";

const initialState = {
  showModal: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_SHOW:
      return { ...state, showModal: true };

    case MODAL_HIDE:
      return { ...state, showModal: false };

    default:
      return state;
  }
};

export default modalReducer;
