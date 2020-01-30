import React from 'react';
import './index.css';
import MapMode from "../../model/MapMode";
import {useSelector} from "react-redux";
import ViewMarkersView from "./ViewMarkersView";
import AddMarkerView from "./AddMarkerView";
import Grid from "@material-ui/core/Grid";


function BottomMapMenu() {
    const mapMode = useSelector(store => store.map.mapMode);
    const menu = mapMode === MapMode.VIEW_MARKERS ? <ViewMarkersView/> : <AddMarkerView/>;

    return (
        <Grid container
              direction="row"
              justify="space-between"
              className="BottomMenu">{menu}</Grid>
    );

}

export default BottomMapMenu;
