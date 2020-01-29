import React, {useEffect, useState} from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import Map from "./Map";
import BottomMenu from "./BottomMenu";
import MapMode from "./MapMode";

const markers = [
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

const tmpMarker = {
    id: 'abc1',
    latLng: [50, 20]
};

function App() {
    const [mapMode, setMapMode] = useState(MapMode.VIEW_MARKERS);
    const [tmpMarker, setTmpMarker] = useState();

    return (
        <Container className="App" maxWidth='md' disableGutters={true}>
            <Map markers={markers} mapMode={mapMode} tmpMarker={tmpMarker} setTmpMarker={setTmpMarker}/>
            <BottomMenu setMapMode={setMapMode} mapMode={mapMode} setTmpMarker={setTmpMarker}/>
        </Container>
    );
}

export default App;
