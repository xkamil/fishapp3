import React from 'react';
import './index.css';
import BottomMapMenuView from "./view";
import {setMapFilter, setMapMode} from "../../../redux/actions/mapActions";
import MapMode from "../../../model/MapMode";
import MapFilter from "../../../model/MapFilter";
import {redirectTo} from "../../../redux/actions/appActions";
import {setTmpMarkerType, updateTmpMarker} from "../../../redux/actions/markerActions";


function BottomMapMenu() {

    function enableAddMarkerMode() {
        setMapMode(MapMode.ADD_MARKER);
    }

    function setShopFilter() {
        setMapFilter(MapFilter.SHOP);
    }

    function setFishFilter() {
        setMapFilter(MapFilter.FISH);
    }

    function onCancel() {
        updateTmpMarker(null);
        setMapMode(MapMode.VIEW_MARKERS);
    }

    function onSetMarkerType(type) {
        setTmpMarkerType(type);
    }

    return <BottomMapMenuView
        enableAddMarkerMode={enableAddMarkerMode}
        setShopFilter={setShopFilter}
        setFishFilter={setFishFilter}
        onCancel={onCancel}
        onSetMarkerType={onSetMarkerType}
    />

}

export default BottomMapMenu;
