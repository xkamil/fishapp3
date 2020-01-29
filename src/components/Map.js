import React, {useEffect, useState} from 'react';
import './Map.css';
import MapMode from "./MapMode";

function Map(props) {
    const tileServer = 'http://89.25.168.94/hot/{z}/{x}/{y}.png';
    const {mapMode, markers, tmpMarker, setTmpMarker} = props;

    useEffect(initializeMap, []);
    useEffect(addMarkers);

    function initializeMap() {
        let L = window.L;
        window.map = L.map('map').setView([25.36629, 25.83335], 4);
        L.tileLayer(tileServer).addTo(window.map);
        window.map.addEventListener('click', onMapClicked);
    }

    function addMarkers() {
        const lg = window.L.layerGroup();
        if (mapMode === MapMode.VIEW_MARKERS) {
            setTmpMarker(null);
            markers.forEach(marker => window.L.marker(marker.latLng, {icon: window.L.icon({iconUrl: marker.icon, iconSize: [30,30]})}).addTo(lg));
        } else if (mapMode === MapMode.ADD_MARKER && tmpMarker) {
            window.L.marker(tmpMarker.latLng).addTo(lg)
        }
        window.map.addLayer(lg);

        return () => window.map.removeLayer(lg);
    }

    function onMapClicked(mouseEvent) {
        const marker = {
            latLng: mouseEvent.latlng,
        };
        setTmpMarker(marker)
    }

    return (
        <div id="map">
        </div>
    );
}

Map.defaultProps = {
    markers: [],
    mapMode: MapMode.VIEW_MARKERS,
};

export default Map;
