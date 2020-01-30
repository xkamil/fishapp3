import React from 'react';
import './index.css';
import MapMode from "../MapMode";
import {useSelector} from "react-redux";
import ViewMarkersView from "./ViewMarkersView";
import AddMarkerView from "./AddMarkerView";


function BottomMapMenu() {
   const mapMode = useSelector(store => store.map.mapMode);

   return mapMode === MapMode.VIEW_MARKERS ? <ViewMarkersView/> : <AddMarkerView/>;

}

export default BottomMapMenu;
