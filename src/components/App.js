import React, {useEffect, useState} from 'react';
import './App.css';
import {Box, Container} from "@material-ui/core";
import Map from "./Map";
import { useSelector} from "react-redux";
import Api from "../Api";
import BottomMapMenu from "./BottomMapMenu";
import Alert from "@material-ui/lab/Alert";
import MapMode from "./MapMode";



function App() {
   const tmpMarker = useSelector(store => store.map.tmpMarker);
   const mapMode = useSelector(store => store.map.mapMode);

   useEffect(Api.getMarkers);

   return (
              <Container className="App" maxWidth='md' disableGutters={true}>

                 {mapMode === MapMode.ADD_MARKER && !tmpMarker &&
                 <Box css={{padding: 10, paddingLeft: 50, zIndex: 1, position: 'relative'}}>
                    <Alert severity="info">Place marker on map and click 'Add'</Alert>
                 </Box>
                 }

                 <Map/>
                 <BottomMapMenu/>
              </Container>

   );
}

export default App;
