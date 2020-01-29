import React, {useEffect, useState} from 'react';
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import FilterIcon from '@material-ui/icons/FilterList';
import CloseIcon from '@material-ui/icons/Close';
import Grid from "@material-ui/core/Grid";
import If from "./If";
import './BottomMenu.css';
import MapMode from "./MapMode";
import Button from "@material-ui/core/Button";

function BottomMenu(props) {
    const [isExpanded, setExpanded] = useState(false);
    const {setMapMode, mapMode} = props;

    function toggleExpand() {
        setExpanded(!isExpanded);
    }

    function addItem(itemType) {
        setMapMode(MapMode.ADD_MARKER);
        setExpanded(false);
    }

    return (
        <Grid container
              direction="row"
              justify="center"
              alignItems="stretch"
              className="BottomMenu"
        >
            <If isTrue={mapMode === MapMode.VIEW_MARKERS}>
                <Grid item>
                    <Fab color="primary" aria-label="filter" className='filterButton'>
                        <FilterIcon/>
                    </Fab>
                </Grid>
            </If>

            <If isTrue={mapMode === MapMode.ADD_MARKER}>
                <Grid item>
                    <Fab color="primary" aria-label="fish" variant="extended" onClick={() => addItem('shop')}>
                        Add
                    </Fab>
                </Grid>
                <Grid item>
                    <Fab color="secondary" aria-label="fish" variant="extended"
                         onClick={() => setMapMode(MapMode.VIEW_MARKERS)}>
                        Cancel
                    </Fab>
                </Grid>
            </If>

            <Grid container
                  direction="column"
                  justify="center"
                  alignItems="flex-end"
                  spacing={0}
                  className="addItemMenu"
            >


                <If isTrue={mapMode === MapMode.VIEW_MARKERS}>

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
                </If>
            </Grid>
        </Grid>
    );
}


export default BottomMenu;
