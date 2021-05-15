import { combineReducers } from "redux";

import auth from "./auth";
import photos from "./photos";
import loader from "./loader";

export default combineReducers({
  auth,
  photos,
  loader,
});
