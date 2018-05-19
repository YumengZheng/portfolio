/* eslint-disable */
import Redux, { combineReducers }  from 'redux';
import bannerReducer from './banner-reducer.js';

var rootReducer = combineReducers(
  bannerReducer
);


export default rootReducer