import React, {useEffect, useState} from 'react';
import './Map.css';
import MapMode from "./MapMode";
import {useSelector} from 'react-redux'
import {updateTmpMarker} from "../redux/actions/markerActions";


function Map() {
   const tileServer = 'http://89.25.168.94/hot/{z}/{x}/{y}.png';

   const markers = useSelector(store => store.markers.fetched);
   const mapMode = useSelector(store => store.map.mapMode);
   const tmpMarker = useSelector(store => store.map.tmpMarker);

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
         markers.forEach(marker => window.L.marker(marker.latlng).addTo(lg));
      } else if (mapMode === MapMode.ADD_MARKER && tmpMarker) {
         window.L.marker(tmpMarker.latlng).addTo(lg)
      }
      window.map.addLayer(lg);

      return () => window.map.removeLayer(lg);
   }

   function onMapClicked(mouseEvent) {
      const marker = {
         latlng: mouseEvent.latlng,
      };
      updateTmpMarker(marker);
   }

   return (
           <div id="map">
           </div>
   );
}

Map.defaultProps = {
   mapMode: MapMode.VIEW_MARKERS,
};

export default Map;
