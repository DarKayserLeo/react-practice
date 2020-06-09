import { combineReducers } from 'redux';
import AppReducer from './app';

//combines all reducers for the current app
export default combineReducers({
  app: AppReducer,
});
