import {updateMarkers} from "./redux/actions/markerActions";

const exampleMarkers = [
   {
      id: 'abc1',
      latLng: [50, 30],
      icon: "https://img.icons8.com/officel/16/000000/marker.png"
   },
   {
      id: 'abc1',
      latLng: [50.5, 30.3],
      icon: "https://img.icons8.com/officel/16/000000/marker.png"
   },
   {
      id: 'abc1',
      latLng: [50, 31],
      icon: "https://img.icons8.com/officel/16/000000/marker.png"
   },
   {
      id: 'abc1',
      latLng: [51, 32],
      icon: "https://img.icons8.com/officel/16/000000/marker.png"
   }
];


const Api = {

   getMarkers: () => {
      setTimeout(() => {
         updateMarkers(getRandomMarkers())
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
         latlng: [getRandomInt(0, 90), getRandomInt(0, 90)]
      };
      markers.push(marker)
   }
   return markers;
}

export default Api;