import Store from "../Store";

export const UPDATE_MAP_MODE = 'UPDATE_MAP_MODE';
export const SET_MAP_FILTER = 'SET_MAP_FILTER';

function setMapMode(mode) {
   Store.dispatch({type: UPDATE_MAP_MODE, data: mode});
}

function setMapFilter(mode) {
   Store.dispatch({type: SET_MAP_FILTER, data: mode});
}

export {
   setMapMode,
   setMapFilter,
}