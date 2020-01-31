import {combineReducers} from 'redux';
import markers from "./markers";
import app from "./app";
import map from "./map";

export default combineReducers({markers, map, app});