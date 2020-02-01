import Store from "../Store";

export const UPDATE_MARKERS = 'ADD_NOTIFICATION';
export const UPDATE_TMP_MARKER = 'UPDATE_TMP_MARKER';
export const SET_TMP_MARKER_TYPE = 'SET_TMP_MARKER_TYPE';

export function updateMarkers(markers) {
    Store.dispatch(UPDATE_MARKERS, markers);
}

export function updateTmpMarker(marker) {
    Store.dispatch(UPDATE_TMP_MARKER, marker);
}

export function setTmpMarkerType(markerType) {
    Store.dispatch(SET_TMP_MARKER_TYPE, markerType);
}
