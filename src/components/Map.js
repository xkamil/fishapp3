import React, {useEffect, useState} from 'react';
import './Map.css';
import MapMode from "./MapMode";
import {useSelector} from 'react-redux'
import {updateTmpMarker} from "../redux/actions/markerActions";


function Map() {
   const tileServer = 'http://89.25.168.94/hot/{z}/{x}/{y}.png';

   const markers = useSelector(store => store.markers.fetched);
   const mapMode = useSelector(store => store.map.mapMode);
   const mapFilter = useSelector(store => store.map.filter);
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
         markers.filter(marker => marker.type === mapFilter)
                 .map(marker => createMarker(marker))
                 .forEach(marker => marker.addTo(lg));
      } else if (mapMode === MapMode.ADD_MARKER && tmpMarker) {
         window.L.marker(tmpMarker.latlng).addTo(lg)
      }
      window.map.addLayer(lg);

      return () => window.map.removeLayer(lg);
   }

   function createMarker(marker) {
      const L = window.L;

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
           <div id="map">
           </div>
   );
}

Map.defaultProps = {
   mapMode: MapMode.VIEW_MARKERS,
};

export default Map;
