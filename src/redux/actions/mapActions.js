import Store from "../Store";
import MapMode from "../../components/MapMode";
import {updateTmpMarker} from "./markerActions";

export const UPDATE_MAP_MODE = 'UPDATE_MAP_MODE';
export const SET_MAP_FILTER = 'SET_MAP_FILTER';

function setMapMode(mode) {
   Store.dispatch({type: UPDATE_MAP_MODE, data: mode});
   if (mode === MapMode.VIEW_MARKERS) {
      updateTmpMarker(null)
   }
}

function setMapFilter(mode) {
   Store.dispatch({type: SET_MAP_FILTER, data: mode});
}

export {
   setMapMode,
   setMapFilter,
}