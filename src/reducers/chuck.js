import {
  ASYNC_START,
  ASYNC_END,
  GET_CHUCK_CAT,
  GET_RANDOM_FACT,
  CLEAN_STATE
} from 'actionTypes';

const defaultState = {

};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ASYNC_START: 
        return {...state, asyncRunning: true};
    case ASYNC_END: 
        return {...state, asyncRunning: false};
    case GET_CHUCK_CAT:
        return {
          ...state,
          categories: action.error ? null : action.payload,
          error: action.error ? action.payload : null,
        }
    case GET_RANDOM_FACT:
        return {
          ...state,
          fact: action.error ? null : action.payload,
          error: action.error ? action.payload : null,
        }
    case CLEAN_STATE:
        return {
          ...state,
          fact: null,
          error:null,
        }
    default:
      return state;
  }
};
