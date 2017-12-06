import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter/counterReducers';

export default combineReducers({
  router: routerReducer,
  counter
});
