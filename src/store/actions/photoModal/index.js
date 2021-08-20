import { SHOW_PHOTO_MODAL, HIDE_PHOTO_MODAL } from "../../constants/photoModal";

export function showPhotoModal() {
  return {
    type: SHOW_PHOTO_MODAL,
  };
}

export function hidePhotoModal() {
  return {
    type: HIDE_PHOTO_MODAL,
  };
}
