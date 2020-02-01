import Store from "../Store";

export const SET_MAP_MODE = 'SET_MAP_MODE';
export const SET_MAP_FILTER = 'SET_MAP_FILTER';

export function setMapMode(mode) {
    Store.dispatch(SET_MAP_MODE, mode);
}

export function setMapFilter(mode) {
    Store.dispatch(SET_MAP_FILTER, mode);
}
