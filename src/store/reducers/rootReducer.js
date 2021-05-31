import { combineReducers } from "redux";

import auth from "./auth";
import photos from "./photos";
import like from "./like";
import loader from "./loader";
import counter from "./counterPage";

export default combineReducers({
  auth,
  photos,
  like,
  loader,
  counter,
});
