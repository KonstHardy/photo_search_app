import { createApi } from "unsplash-js";

const API_URL = "https://api.unsplash.com";
const ACCESS_KEY = "V7Sr52HbltODrFjnlVkvTO3gIh50m4CeGsLozyTFE1E";

export const Unsplash = createApi({
  accessKey: ACCESS_KEY,
  apiUrl: API_URL,
});
