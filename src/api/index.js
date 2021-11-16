import Unsplash from 'unsplash-js';

const APP_ACCESS_KEY = 'TzjxJDZHAg7uKVdM7ge9dlLYXgjpLL6JG5GCKpsvv9w';
const APP_SECRET = '7V9R1Y1ardLu1DZsooS0WCx4LLUhHj-TzQRiCnWoYmk';
const CALLBACK_URL = 'https://nifty-joliot-938f87.netlify.app/gallery';
const USER_BEARER_TOKEN = localStorage.getItem('BearerToken');

const unsplash = new Unsplash({
  accessKey: APP_ACCESS_KEY,
  secret: APP_SECRET,
  callbackUrl: CALLBACK_URL,
  bearerToken: USER_BEARER_TOKEN,
});

export default unsplash;
