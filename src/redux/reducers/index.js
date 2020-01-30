import {combineReducers} from 'redux';
import {UPDATE_MARKERS, UPDATE_TMP_MARKER} from "../actions/markerActions";
import MapMode from "../../model/MapMode";
import {SET_MAP_FILTER, UPDATE_MAP_MODE} from "../actions/mapActions";
import {AppView, REDIRECT_TO, SET_APP_DICTIONARY, SET_APP_VIEW} from "../actions/appActions";
import MarkerFilter from "../../model/MarkerFilter";
import Dictionary from "../../model/Dictionary";

const markersInitialState = {fetched: []};

function markers(state = markersInitialState, action) {
    switch (action.type) {
        case UPDATE_MARKERS : {
            return {...state, fetched: action.data};
        }
        default:
            return state;
    }
}

const mapInitialState = {
    mapMode: MapMode.VIEW_MARKERS,
    filter: MarkerFilter.FISH,
    tmpMarker: null
};

function map(state = mapInitialState, action) {
    switch (action.type) {
        case UPDATE_MAP_MODE : {
            return {...state, mapMode: action.data};
        }
        case UPDATE_TMP_MARKER : {
            return {...state, tmpMarker: action.data};
        }
        case SET_MAP_FILTER : {
            return {...state, filter: action.data};
        }
        default:
            return state;
    }
}

const appInitialState = {
    view: AppView.MAP,
    dictionary: Dictionary,
    redirectTo: '/'
};

function app(state = appInitialState, action) {
    console.log(action)
    switch (action.type) {
        case SET_APP_VIEW : {
            return {...state, view: action.data};
        }
        case SET_APP_DICTIONARY : {
            return {...state, dictionary: action.data};
        }
        case SET_APP_DICTIONARY : {
            return {...state, dictionary: action.data};
        }
        case REDIRECT_TO : {
            return {...state, redirectTo: action.data};
        }
        default:
            return state;
    }
}

export default combineReducers({markers, map, app});