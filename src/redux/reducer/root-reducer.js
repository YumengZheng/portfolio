/* eslint-disable */
import Redux, { combineReducers }  from 'redux';
import bannerReducer from './banner-reducer.js';
import bannerLeftReducer from './banner-left-reducer.js';
import bannerRightReducer from './banner-right-reducer.js';

const reducer = Object.assign(bannerReducer, bannerLeftReducer,bannerRightReducer);
var rootReducer = combineReducers(
  reducer
);


export default rootReducer