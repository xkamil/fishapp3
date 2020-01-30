import React, {useEffect, useState} from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import Map from "./Map/Map";
import Api from "../Api";
import BottomMapMenu from "./BottomMapMenu";
import Grid from "@material-ui/core/Grid";
import AddItemDialog from "./AddItemDialog";


function App() {
   useEffect(Api.getMarkers);

   return (
           <Container className="App" maxWidth='md' disableGutters={true}>
              <Map/>
              <Grid container direction="row" className="appButtonContainer">
                 <BottomMapMenu/>
              </Grid>

              <AddItemDialog/>
           </Container>

   );
}

export default App;
