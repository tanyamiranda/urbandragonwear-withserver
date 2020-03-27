import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// This object is create to hold all middleware calls
// the applyMiddleware() function can actually take
// just the logger import, but we are using more 
// objects in the future, so an array is better  
const middlewareObjects = [logger];

// Using ...middlewareObjects spreads all objects as 
// individual parameters in the function. Otherwise,
// we could just list them out.
const store = createStore(rootReducer, applyMiddleware(...middlewareObjects));

export default store;