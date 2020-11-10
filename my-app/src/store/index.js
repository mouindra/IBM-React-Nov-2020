  
import { createStore } from 'redux';
import rootMiddleware from './middlewares';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  rootMiddleware
);

export default store;