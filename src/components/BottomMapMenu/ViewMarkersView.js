import React, {useState} from 'react';
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import FilterIcon from '@material-ui/icons/FilterList';
import Grid from "@material-ui/core/Grid";
import './index.css';
import MapMode from "../MapMode";
import {setMapFilter, setMapMode} from "../../redux/actions/mapActions";
import {useSelector} from "react-redux";
import MarkerType from "../MarkerType";

function ViewMarkersView() {
   const mapFilter = useSelector(store => store.map.filter);


   function enableAddMarkerMode() {
      setMapMode(MapMode.ADD_MARKER);
   }



   return (
           <Grid container
                 direction="row"
                 justify="center"
                 alignItems="stretch"
                 className="BottomMenu">

              <Grid item>
                 <Fab color={mapFilter !== MarkerType.FISH ? 'default' : 'primary'} aria-label="filter" onClick={() => setMapFilter(MarkerType.FISH)}>
                    FISH
                 </Fab>
              </Grid>
              <Grid item>
                 <Fab color={mapFilter !== MarkerType.SHOP ? 'default' : 'primary'} aria-label="filter" onClick={() => setMapFilter(MarkerType.SHOP)}>
                    SHOP
                 </Fab>
              </Grid>

              <Grid container
                    direction="column"
                    justify="center"
                    alignItems="flex-end"
                    spacing={0}
                    className="addItemMenu">

                 <Grid item>
                    <Fab color="primary" aria-label="add" onClick={enableAddMarkerMode}>
                       <AddIcon/>
                    </Fab>
                 </Grid>

              </Grid>
           </Grid>
   );
}

export default ViewMarkersView;
