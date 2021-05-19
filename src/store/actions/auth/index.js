import { toJson } from "unsplash-js";
import unsplash from "../../../api";

import { GET_ACCESS_KEY } from "../../types";

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "read_user",
  "write_user",
  "read_photos",
  "write_photos",
]);

const code = window.location.search.split("code=")[1];

// window.location.assign(authenticationUrl);

export function loginAction() {
  return async (dispatch) => {
    await unsplash.auth
      .userAuthentication(code)
      .then(toJson)
      .then((json) => {
        unsplash.auth.setBearerToken(json.access_token);

        if (code) {
          localStorage.setItem("BearerToken", json.access_token);

          dispatch({ type: GET_ACCESS_KEY });
        } else {
          window.location.assign(authenticationUrl);
        }
      });
  };
}
