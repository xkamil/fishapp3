import React, {useState} from 'react';
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import Grid from "@material-ui/core/Grid";
import './index.css';
import MapMode from "../../model/MapMode";
import {setMapFilter, setMapMode} from "../../redux/actions/mapActions";
import {useSelector} from "react-redux";
import MarkerFilter from "../../model/MarkerFilter";

function ViewMarkersView() {
   const d = useSelector(store => store.app.dictionary);
   const mapFilter = useSelector(store => store.map.filter);

   function enableAddMarkerMode() {
      setMapMode(MapMode.ADD_MARKER);
   }

   function setShopFilter() {
      setMapFilter(MarkerFilter.SHOP)
   }

   function setFishFilter() {
      setMapFilter(MarkerFilter.FISH)
   }

   return (
           <>
              <Grid item>
                 <Fab color={mapFilter !== MarkerFilter.FISH ? 'default' : 'primary'} aria-label="filter"
                      onClick={setFishFilter}>
                    {d.FISHES}
                 </Fab>
                 <Fab color={mapFilter !== MarkerFilter.SHOP ? 'default' : 'primary'} aria-label="filter"
                      onClick={setShopFilter}>
                    {d.SHOPS}
                 </Fab>
              </Grid>

              <Grid item>
                 <Fab color="primary" aria-label="add" onClick={enableAddMarkerMode}>
                    <AddIcon/>
                 </Fab>
              </Grid>
           </>
   );
}

export default ViewMarkersView;
