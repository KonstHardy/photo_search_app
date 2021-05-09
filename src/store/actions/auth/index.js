import { toJson } from "unsplash-js";
import unsplash from "../../../api";

import { GET_ACCESS_KEY } from "../../types";

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "read_user",
  "write_user",
  "read_photos",
  "write_photos",
]);

// location.assign(authenticationUrl);

export function loginAction(code) {
  return async (dispatch) => {
    await unsplash.auth
      // .userAuthentication(query.code)
      .userAuthentication(code)
      .then(toJson)
      .then((json) => {
        console.log("GET_ACCESS_KEY", json);
        unsplash.auth.setBearerToken(json.access_token);
        dispatch({ type: GET_ACCESS_KEY, payload: json.results });
      });
  };
}
