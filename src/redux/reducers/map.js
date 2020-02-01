import {SET_TMP_MARKER_TYPE, UPDATE_TMP_MARKER} from "../actions/markerActions";
import MapMode from "../../model/MapMode";
import {SET_MAP_FILTER, SET_MAP_MODE} from "../actions/mapActions";
import MapFilter from "../../model/MapFilter";

const mapInitialState = {
    mode: MapMode.VIEW_MARKERS,
    filter: MapFilter.FISH,
    tmpMarker: null
};

function map(state = mapInitialState, action) {

    switch (action.type) {
        case SET_MAP_MODE : {
            return {...state, mode: action.data,};
        }
        case UPDATE_TMP_MARKER : {
            return {
                ...state,
                tmpMarker: action.data,
                mode: state.mode === MapMode.ADD_MARKER ? MapMode.SET_MARKER_TYPE : state.mode
            };
        }
        case SET_TMP_MARKER_TYPE : {
            return {
                ...state,
                tmpMarker: {...state.tmpMarker, type: action.data},
                mode: MapMode.DESCRIBE_MARKER
            };
        }
        case SET_MAP_FILTER : {
            return {...state, filter: action.data};
        }
        default:
            return state;
    }
}

export default map;