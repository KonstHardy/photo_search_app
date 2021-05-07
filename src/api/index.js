import Unsplash from "unsplash-js";

const APP_ACCESS_KEY = "V7Sr52HbltODrFjnlVkvTO3gIh50m4CeGsLozyTFE1E";
// const API_URL = "https://api.unsplash.com";

const unsplash = new Unsplash({
  accessKey: APP_ACCESS_KEY,
  // apiUrl: API_URL,
});

export default unsplash;
