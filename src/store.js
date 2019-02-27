import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { promiseMiddleware } from 'middleware.js';
import reducer from 'reducer';

import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

// For handling navigation actions
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(myRouterMiddleware, promiseMiddleware);
  } else {
    // Enable redux-logger in Development
    return applyMiddleware(myRouterMiddleware, promiseMiddleware, createLogger())
  }
};

export const store = createStore(
  reducer, composeWithDevTools(getMiddleware()));
