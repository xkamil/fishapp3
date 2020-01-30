import Store from "../Store";
import MapMode from "../../components/MapMode";
import {updateTmpMarker} from "./markerActions";

export const UPDATE_MAP_MODE = 'UPDATE_MAP_MODE';

function updateMapMode(mode) {
   Store.dispatch({type: UPDATE_MAP_MODE, data: mode});
   if (mode === MapMode.VIEW_MARKERS) {
      updateTmpMarker(null)
   }
}

export {
   updateMapMode,
}