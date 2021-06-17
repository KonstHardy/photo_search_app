import { toJson } from "unsplash-js";
import unsplash from "../../../api";

import { LOG_IN, LOG_OUT } from "../../constants/auth";

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "read_user",
  "write_user",
  "read_photos",
  "write_photos",
  "write_likes",
]);

const code = window.location.search.split("code=")[1];

export function logIn() {
  return async (dispatch) => {
    try {
      await unsplash.auth
        .userAuthentication(code)
        .then(toJson)
        .then((json) => {
          unsplash.auth.setBearerToken(json.access_token);
          if (code) {
            localStorage.setItem("BearerToken", json.access_token);
            dispatch({ type: LOG_IN });
          } else {
            window.location.assign(authenticationUrl);
          }
        });
    } catch (err) {
      console.log("Encountered an error with Authentication", err);
    }
  };
}

export function logOut() {
  return (dispatch) => {
    localStorage.removeItem("BearerToken");
    dispatch({ type: LOG_OUT });
  };
}
