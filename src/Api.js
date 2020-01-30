import {updateMarkers} from "./redux/actions/markerActions";
import MarkerType from "./components/MarkerType";

const exampleMarkers = getRandomMarkers();


const Api = {

   getMarkers: () => {
      setTimeout(() => {
         updateMarkers(exampleMarkers)
      }, getRandomInt(1, 1000))
   }
};

function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomMarkers() {
   const markers = [];

   for (let i = 0; i < 50; i++) {
      const marker = {
         id: Math.random(),
         latlng: [getRandomInt(0, 90), getRandomInt(0, 90)],
         type: i % 4 === 0 ? MarkerType.SHOP : MarkerType.FISH
      };
      markers.push(marker)
   }
   return markers;
}

export default Api;