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

// Пример 1

// const code = window.location.search.split("code=")[1];

// export function loginAction() {
//   return async (dispatch) => {
//     await unsplash.auth
//       // .userAuthentication(query.code)
//       .userAuthentication(code)
//       .then(toJson)
//       .then((json) => {
//         console.log("GET_ACCESS_KEY", json);
//         unsplash.auth.setBearerToken(json.access_token);
//         dispatch({ type: GET_ACCESS_KEY, payload: json.results });
//       });
//   };
// }

// Пример 2

export function loginAction() {
  const code = window.location.search.split("code=")[1];

  return async (dispatch) => {
    if (code) {
      unsplash.auth
        .userAuthentication(code)
        .then((res) => res.json())
        .then((json) => {
          // Сохраняем полученный токен
          unsplash.auth.setBearerToken(json.access_token);

          console.log("GET_ACCESS_KEY", json);
          dispatch({ type: GET_ACCESS_KEY, payload: json.access_token });
        });
    }
  };
}
