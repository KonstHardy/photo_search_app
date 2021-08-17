import { MODAL_SHOW, MODAL_HIDE } from "../../constants/modal";

export function showModal() {
  return {
    type: MODAL_SHOW,
  };
}

export function hideModal() {
  return {
    type: MODAL_HIDE,
  };
}
