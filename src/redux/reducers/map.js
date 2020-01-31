import {UPDATE_TMP_MARKER} from "../actions/markerActions";
import MapMode from "../../model/mapMode";
import {SET_MAP_FILTER, SET_MAP_MODE} from "../actions/mapActions";
import markerFilter from "../../model/markerFilter";

const mapInitialState = {
    mode: MapMode.VIEW_MARKERS,
    filter: markerFilter.FISH,
    tmpMarker: null
};

function map(state = mapInitialState, action) {

    switch (action.type) {
        case SET_MAP_MODE : {
            return {...state, mode: action.data,};
        }
        case UPDATE_TMP_MARKER : {
            if (state.mode !== MapMode.ADD_MARKER) {
                return state;
            }
            return {...state, tmpMarker: action.data};
        }
        case SET_MAP_FILTER : {
            return {...state, filter: action.data};
        }
        default:
            return state;
    }
}

export default map;