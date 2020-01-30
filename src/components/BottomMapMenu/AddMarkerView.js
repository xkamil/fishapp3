import React from 'react';
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import MapMode from "../../model/MapMode";
import {useSelector} from "react-redux";
import {setMapMode} from "../../redux/actions/mapActions";
import {AppView, setAppView} from "../../redux/actions/appActions";

function AddMarkerView() {
   const tmpMarker = useSelector(store => store.map.tmpMarker);

   function onAdd() {
      setAppView(AppView.ADD_ITEM)
   }

   function onCancel() {
      setMapMode(MapMode.VIEW_MARKERS)
   }

   return (
           <>
              <Grid item>
                 <Fab color="primary" aria-label="fish" variant="extended" onClick={onAdd} disabled={!tmpMarker}>
                    Add
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
