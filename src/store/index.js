//https://raw.githubusercontent.com/sraksh/sHOPcart/master/src/data/products.js

import { createStore, applyMiddleware, compose  } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

// create an object for the default data
const defaultState = {
  
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

// CREATE STORE
const store = createStore(
  rootReducer,
  defaultState,
  // applyMiddleware(thunk),
  enhancer
);

export default store;