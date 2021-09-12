import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

export default function configureStore() {
  const middlewares = applyMiddleware(thunk);
  const composedEnhancers = composeWithDevTools(middlewares);

  const store = createStore(rootReducer, composedEnhancers);

  return store;
}
