import React, {useState} from 'react';
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import FilterIcon from '@material-ui/icons/FilterList';
import CloseIcon from '@material-ui/icons/Close';
import Grid from "@material-ui/core/Grid";
import If from "../If";
import './index.css';
import MapMode from "../MapMode";
import {updateMapMode} from "../../redux/actions/mapActions";

function ViewMarkersView() {
   const [isExpanded, setExpanded] = useState(false);

   function toggleExpand() {
      setExpanded(!isExpanded);
   }

   function addItem(itemType) {
      updateMapMode(MapMode.ADD_MARKER);
      setExpanded(false);
   }

   return (
           <Grid container
                 direction="row"
                 justify="center"
                 alignItems="stretch"
                 className="BottomMenu">

              <Grid item>
                 <Fab color="primary" aria-label="filter" className='filterButton'>
                    <FilterIcon/>
                 </Fab>
              </Grid>


              <Grid container
                    direction="column"
                    justify="center"
                    alignItems="flex-end"
                    spacing={0}
                    className="addItemMenu">

                 <If isFalse={isExpanded}>
                    <Grid item>
                       <Fab color="primary" aria-label="add" onClick={toggleExpand}>
                          <AddIcon/>
                       </Fab>
                    </Grid>
                 </If>

                 <If isTrue={isExpanded}>
                    <Grid item>
                       <Fab color="primary" aria-label="fish" onClick={() => addItem('shop')}>
                          Shop
                       </Fab>
                    </Grid>

                    <Grid item>
                       <Fab color="primary" aria-label="fish" onClick={() => addItem('fish')}>
                          Fish
                       </Fab>
                    </Grid>

                    <Grid item>
                       <Fab color="secondary" aria-label="close" onClick={toggleExpand}>
                          <CloseIcon/>
                       </Fab>
                    </Grid>
                 </If>

              </Grid>
           </Grid>
   );
}

export default ViewMarkersView;
