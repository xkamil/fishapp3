import React from 'react';
import './index.css';
import BottomMapMenuView from "./view";
import {setMapFilter, setMapMode} from "../../../redux/actions/mapActions";
import MapMode from "../../../model/MapMode";
import MapFilter from "../../../model/MapFilter";
import {redirectTo} from "../../../redux/actions/appActions";


function BottomMapMenu() {

    function enableAddMarkerMode() {
        setMapMode(MapMode.ADD_MARKER);
    }

    function setShopFilter() {
        setMapFilter(MapFilter.SHOP)
    }

    function setFishFilter() {
        setMapFilter(MapFilter.FISH)
    }

    function onCancel() {
        redirectTo('/map');
        setMapMode(MapMode.VIEW_MARKERS)
    }

    function onOk() {
        redirectTo('/map/additem');
        setMapMode(MapMode.DESCRIBE_MARKER)
    }

    return <BottomMapMenuView
        enableAddMarkerMode={enableAddMarkerMode}
        setShopFilter={setShopFilter}
        setFishFilter={setFishFilter}
        onCancel={onCancel}
        onOk={onOk}
    />

}

export default BottomMapMenu;
