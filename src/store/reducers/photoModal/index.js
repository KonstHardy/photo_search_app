import { SHOW_PHOTO_MODAL, HIDE_PHOTO_MODAL } from '../../constants/photoModal';

const initialState = {
  showPhotoModal: false,
};

const photoModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PHOTO_MODAL:
      return { ...state, showPhotoModal: true };

    case HIDE_PHOTO_MODAL:
      return { ...state, showPhotoModal: false };

    default:
      return state;
  }
};

export default photoModalReducer;
