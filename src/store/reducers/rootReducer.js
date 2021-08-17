import { combineReducers } from "redux";

import auth from "./auth";
import photos from "./photos";
import loader from "./loader";
import counter from "./counterPage";
import modal from "./modal";

export default combineReducers({
  auth,
  photos,
  loader,
  counter,
  modal,
});
