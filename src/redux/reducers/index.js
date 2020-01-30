import {combineReducers} from 'redux';
import {UPDATE_MARKERS, UPDATE_TMP_MARKER} from "../actions/markerActions";
import MapMode from "../../components/MapMode";
import {UPDATE_MAP_MODE} from "../actions/mapActions";

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

const mapInitialState = {mapMode: MapMode.VIEW_MARKERS, tmpMarker: null};

function map(state = mapInitialState, action) {
   switch (action.type) {
      case UPDATE_MAP_MODE : {
         return {...state, mapMode: action.data};
      }
      case UPDATE_TMP_MARKER : {
         return {...state, tmpMarker: action.data};
      }
      default:
         return state;
   }
}

export default combineReducers({markers, map});