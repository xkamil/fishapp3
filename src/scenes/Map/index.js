import React, {useEffect} from 'react';
import './index.css';
import MapMode from "../../model/MapMode";
import {useSelector} from 'react-redux'
import {updateTmpMarker} from "../../redux/actions/markerActions";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import BottomMapMenu from "./BottomMapMenu";
import AddItemDialog from "./AddItemDialog";
import Api from "../../services/Api";
import {Switch, Route} from "react-router-dom";
import {Map, Marker, Popup, TileLayer} from "react-leaflet";


function MapScreen() {
    const tileServer = 'http://89.25.168.94/hot/{z}/{x}/{y}.png';

    const position = {
        lat: 51.505,
        lng: -0.09,
        zoom: 3,
    };

    const markers = useSelector(store => store.markers.fetched);
    const mapMode = useSelector(store => store.map.mode);
    const mapFilter = useSelector(store => store.map.filter);
    const tmpMarker = useSelector(store => store.map.tmpMarker);

    useEffect(Api.getMarkers);

    function handleMapClicked(mouseEvent) {
        if (mapMode === MapMode.ADD_MARKER) {
            updateTmpMarker(mouseEvent);
        }
    }

    function Markers() {
        if (mapMode === MapMode.VIEW_MARKERS) {
            return markers
                .filter(marker => marker.type.filter === mapFilter)
                .map(marker => <Marker key={marker.id} position={marker.latlng}/>)
        } else {
            return tmpMarker ? <Marker position={tmpMarker.latlng}/> : '';
        }
    }

    return (
        <Map center={position} zoom={position.zoom} className="MapScreen" onClick={handleMapClicked}>
            <TileLayer url={tileServer}/>
            <Markers/>
            <Container className="mapOverlayButtonContainer height100" maxWidth='md' disableGutters={true}>
                <Grid container className='height100'>
                    <BottomMapMenu/>
                </Grid>
                <AddItemDialog/>
            </Container>
        </Map>
    );
}

export default MapScreen;
