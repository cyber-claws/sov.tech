import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import chuck from 'reducers/chuck';

export default combineReducers({
  chuck,
  router: routerReducer
});
