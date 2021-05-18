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

// window.location.assign(authenticationUrl);

const code = window.location.search.split("code=")[1];

export function loginAction() {
  // window.location.assign(authenticationUrl);

  // const code = window.location.search.split("code=")[1];

  return async (dispatch) => {
    await unsplash.auth
      .userAuthentication(code)
      .then(toJson)
      .then((json) => {
        unsplash.auth.setBearerToken(json.access_token);

        // window.location.assign(authenticationUrl);
        localStorage.setItem("BearerToken", json.access_token);

        dispatch({ type: GET_ACCESS_KEY });
      });
  };
}
