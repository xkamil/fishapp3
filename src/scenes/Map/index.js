import React, {useEffect} from 'react';
import './index.css';
import MapMode from "../../model/mapMode";
import {useSelector} from 'react-redux'
import {updateTmpMarker} from "../../redux/actions/markerActions";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import BottomMapMenu from "./BottomMapMenu";
import AddItemDialog from "./AddItemDialog";
import Api from "../../services/Api";
import {Switch, Route} from "react-router-dom";


function Map() {
    const tileServer = 'http://89.25.168.94/hot/{z}/{x}/{y}.png';
    const L = window.L;

    const markers = useSelector(store => store.markers.fetched);
    const mapMode = useSelector(store => store.map.mode);
    const mapFilter = useSelector(store => store.map.filter);
    const tmpMarker = useSelector(store => store.map.tmpMarker);

    useEffect(Api.getMarkers);
    useEffect(initializeMap, []);
    useEffect(addMarkers);

    function initializeMap() {
        window.map = L.map('map').setView([25.36629, 25.83335], 4);
        L.tileLayer(tileServer).addTo(window.map);
        window.map.addEventListener('click', onMapClicked);
    }

    function addMarkers() {
        const lg = window.L.layerGroup();
        if (mapMode === MapMode.VIEW_MARKERS) {
            markers.filter(marker => marker.type.filter === mapFilter)
                .map(marker => createMarker(marker))
                .forEach(marker => marker.addTo(lg));
        } else if ((mapMode === MapMode.ADD_MARKER || mapMode === MapMode.DESCRIBE_MARKER) && !!tmpMarker) {
            L.marker(tmpMarker.latlng).addTo(lg)
        }
        window.map.addLayer(lg);

        return () => window.map.removeLayer(lg);
    }

    function createMarker(marker) {
        const iconOptions = {
            iconUrl: marker.type.icon,
            iconSize: [40, 40],
        };
        const markerOptions = {
            icon: L.icon(iconOptions)
        };
        return L.marker(marker.latlng, markerOptions);
    }

    function onMapClicked(mouseEvent) {
        const marker = {
            latlng: mouseEvent.latlng,
        };
        updateTmpMarker(marker);
    }

    return (
        <>
            <div id="map"/>
            <Container className="Map" maxWidth='md' disableGutters={true}>
                <Grid container direction="row" className="appButtonContainer">
                    <BottomMapMenu/>
                </Grid>
                <Switch>
                    <Route path='/map/additem'>
                        <AddItemDialog/>
                    </Route>
                </Switch>
            </Container>
        </>
    );
}

export default Map;
