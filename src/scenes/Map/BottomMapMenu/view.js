import React from 'react';
import './index.css';
import MapMode from "../../../model/MapMode";
import {useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import MapFilter from "../../../model/MapFilter";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";


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
    const marker = useSelector(store => store.map.tmpMarker);
    const {onCancel, onOk} = props;

    return (
        <>
            <Grid item>
                <Fab color="primary" variant="extended" disabled={!marker} onClick={onOk}>
                    {d.OK}
                </Fab>
            </Grid>
            <Grid item>
                <Fab color="secondary" variant="extended" onClick={onCancel}>
                    {d.CANCEL}
                </Fab>
            </Grid>
        </>
    )
}

export default BottomMapMenuView;
