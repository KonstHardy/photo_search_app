import Unsplash from "unsplash-js";

const APP_ACCESS_KEY = "V7Sr52HbltODrFjnlVkvTO3gIh50m4CeGsLozyTFE1E";
const APP_SECRET = "26lh7dwP3S5wT_NCvvrfzEWwEHNid9vcVdTes2MSMEM";
const CALLBACK_URL = "http://localhost:3000/";
const USER_BEARER_TOKEN = localStorage.getItem("accessKey");

const unsplash = new Unsplash({
  accessKey: APP_ACCESS_KEY,
  secret: APP_SECRET,
  callbackUrl: CALLBACK_URL,
  bearerToken: USER_BEARER_TOKEN,
});

export default unsplash;
