/* eslint-disable */
import { createStore } from 'redux';
import rootReducer from './reducer/root-reducer.js';

export default createStore(
  rootReducer
);