import React from 'react';
import './index.css';
import MapMode from "../../../model/MapMode";
import {useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import MarkerType from "../../../model/MarkerType";


function BottomMapMenuView(props) {
    const mode = useSelector(store => store.map.mode);

    return (
        <Grid container
              direction="row"
              justify="space-between"
              className="BottomMenu"
        >
            {mode === MapMode.VIEW_MARKERS ? <ViewMarkers {...props}/> : <AddMarker {...props}/>}
        </Grid>
    );

}

function ViewMarkers(props) {
    const d = useSelector(store => store.app.dictionary);
    const mapFilter = useSelector(store => store.map.filter);
    const {enableAddMarkerMode, setShopFilter, setFishFilter} = props;

    return (
        <>
            <Grid item>
                <Fab color={mapFilter !== mapFilter.FISH ? 'default' : 'primary'} onClick={setFishFilter}>
                    {d.FISHES}
                </Fab>
                <Fab color={mapFilter !== mapFilter.SHOP ? 'default' : 'primary'} onClick={setShopFilter}>
                    {d.SHOPS}
                </Fab>
            </Grid>

            <Grid item>
                <Fab color="primary" onClick={enableAddMarkerMode}>
                    <AddIcon/>
                </Fab>
            </Grid>
        </>
    );
}

function AddMarker(props) {
    const d = useSelector(store => store.app.dictionary);
    const mapMode = useSelector(store => store.map.mode);
    const {onCancel, onSetMarkerType} = props;

    return (
        <>
            <Grid item>
                {mapMode === MapMode.SET_MARKER_TYPE &&
                <>
                    <Fab color="primary" onClick={() => onSetMarkerType(MarkerType.FISH)}>
                        {d.FISH}
                    </Fab>
                    <Fab color="primary" onClick={() => onSetMarkerType(MarkerType.SHOP)}>
                        {d.SHOP}
                    </Fab>
                </>
                }
            </Grid>
            <Grid item>
                <Fab color="secondary" onClick={onCancel}>
                    <CloseIcon/>
                </Fab>
            </Grid>
        </>
    )
}

export default BottomMapMenuView;
