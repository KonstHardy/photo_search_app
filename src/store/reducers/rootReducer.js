import { combineReducers } from 'redux';

import auth from './auth';
import loader from './loader';
import photos from './photos';
import photoModal from './photoModal';
import pageCounter from './pageCounter';

export default combineReducers({
  auth,
  loader,
  photos,
  photoModal,
  pageCounter,
});
