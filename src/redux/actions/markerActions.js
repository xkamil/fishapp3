import Store from "../Store";

export const UPDATE_MARKERS = 'ADD_NOTIFICATION';
export const UPDATE_TMP_MARKER = 'UPDATE_TMP_MARKER';

function updateMarkers(markers) {
   Store.dispatch({type: UPDATE_MARKERS, data: markers});
}

function updateTmpMarker(marker) {
   Store.dispatch({type: UPDATE_TMP_MARKER, data: marker});
}

export {
   updateMarkers,
   updateTmpMarker,
}