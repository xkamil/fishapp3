import React from 'react';
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import './index.css';
import MapMode from "../MapMode";
import {useSelector} from "react-redux";
import {updateMapMode} from "../../redux/actions/mapActions";

function AddMarkerView() {
   const tmpMarker = useSelector(store => store.map.tmpMarker);

   return (
           <Grid container
                 direction="row"
                 justify="center"
                 alignItems="stretch"
                 className="BottomMenu">

              <Grid item>
                 <Fab color="primary" aria-label="fish" variant="extended" onClick={() => {
                 }}
                      disabled={!tmpMarker}>
                    Add
                 </Fab>
              </Grid>
              <Grid item>
                 <Fab color="secondary" aria-label="fish" variant="extended"
                      onClick={() => updateMapMode(MapMode.VIEW_MARKERS)}>
                    Cancel
                 </Fab>
              </Grid>

           </Grid>
   )
}


export default AddMarkerView;
