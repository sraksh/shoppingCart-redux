//https://raw.githubusercontent.com/sraksh/sHOPcart/master/src/data/products.js

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

// create an object for the default data
const defaultState = {
  
};

// CREATE STORE
const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(thunk)
  // ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;