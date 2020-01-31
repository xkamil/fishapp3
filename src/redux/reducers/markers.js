import {UPDATE_MARKERS, UPDATE_TMP_MARKER} from "../actions/markerActions";

const markersInitialState = {
    fetched: [],
    tmpMarker: null
};

function markers(state = markersInitialState, action) {
    switch (action.type) {
        case UPDATE_MARKERS : {
            return {...state, fetched: action.data};
        }
        case UPDATE_TMP_MARKER : {
            return {...state, tmpMarker: action.data};
        }
        default:
            return state;
    }
}

export default markers;