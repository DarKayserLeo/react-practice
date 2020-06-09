import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/';

const initialState = {
  user: {
    name: 'none',
  },
  sections: [],
};

export default createStore(reducer, applyMiddleware(thunk));
