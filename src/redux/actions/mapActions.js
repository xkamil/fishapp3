import Store from "../Store";
import MapMode from "../../model/MapMode";
import {updateTmpMarker} from "./markerActions";

export const SET_MAP_MODE = 'SET_MAP_MODE';
export const SET_MAP_FILTER = 'SET_MAP_FILTER';

export function setMapMode(mode) {
    Store.dispatch(SET_MAP_MODE, mode);
    if (mode !== MapMode.DESCRIBE_MARKER) {
        updateTmpMarker(null);
    }
}

export function setMapFilter(mode) {
    Store.dispatch(SET_MAP_FILTER, mode);
}
