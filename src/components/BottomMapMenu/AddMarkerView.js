import React from 'react';
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import MapMode from "../../model/MapMode";
import {setMapMode} from "../../redux/actions/mapActions";

function AddMarkerView() {

   function onCancel() {
      setMapMode(MapMode.VIEW_MARKERS)
   }

   function onOk() {
      setMapMode(MapMode.SAVE_MARKER)
   }

   return (
           <>
              <Grid item>
                 <Fab color="primary" aria-label="fish" variant="extended" onClick={onOk}>
                    Ok
                 </Fab>
              </Grid>
              <Grid item>
                 <Fab color="secondary" aria-label="fish" variant="extended" onClick={onCancel}>
                    Cancel
                 </Fab>
              </Grid>
           </>
   )
}


export default AddMarkerView;
