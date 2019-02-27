import {
  ASYNC_START,
  ASYNC_END,
} from 'actionTypes';

const isPromise = (obj) => {
  return obj && typeof obj.then === 'function';
}

const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    store.dispatch({ type: ASYNC_START, subtype: action.type }); // subtype is the action that called the async action
    action.payload.then(response => { return response.json()})
    .then(
      res => {
        action.payload = res;
        store.dispatch({ type: ASYNC_END, promise: action.payload });
        store.dispatch(action);
      },
      error => {
        action.error = true;
        action.payload = error.response.body;
        if (!action.skipTracking) {
          store.dispatch({ type: ASYNC_END, promise: action.payload });
        }
        store.dispatch(action);
      }
    );

    return;
  }

  next(action);
};

export { promiseMiddleware }
