import {updateMarkers} from "../redux/actions/markerActions";
import markerType from "../model/markerType";

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

   function getRandomType(i) {
      if (i % 5 === 0) {
         return markerType.FISH_GROUP
      } else if (i % 4 === 0) {
         return markerType.FISH
      }
      return markerType.SHOP
   }

   for (let i = 0; i < 50; i++) {
      const marker = {
         id: Math.random(),
         latlng: [getRandomInt(0, 90), getRandomInt(0, 90)],
         type: getRandomType(i)
      };
      markers.push(marker)
   }
   return markers;
}

export default Api;