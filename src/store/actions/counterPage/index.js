import {
  SET_CURRENT_PAGE,
  RESET_CURRENT_PAGE,
} from "../../constants/counterPage";

let pageCounter = 1;

export function setCurrentPage(page) {
  return {
    type: SET_CURRENT_PAGE,
    payload: page + 1,
  };
}

export function resetCurrentPage() {
  return {
    type: RESET_CURRENT_PAGE,
    payload: pageCounter + 1,
  };
}
