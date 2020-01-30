import React from 'react';
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import MapMode from "../../model/MapMode";
import {setMapMode} from "../../redux/actions/mapActions";
import {useSelector} from "react-redux";
import {redirectTo} from "../../redux/actions/appActions";

function AddMarkerView() {
    const d = useSelector(store => store.app.dictionary);
    const marker = useSelector(store => store.map.tmpMarker);

    function onCancel() {
        redirectTo('/map');
        setMapMode(MapMode.VIEW_MARKERS)
    }

    function onOk() {
        redirectTo('/map/additem');
        setMapMode(MapMode.SAVE_MARKER)
    }

    return (
        <>
            <Grid item>
                <Fab color="primary" aria-label="fish" variant="extended" disabled={!marker} onClick={onOk}>
                    {d.OK}
                </Fab>
            </Grid>
            <Grid item>
                <Fab color="secondary" aria-label="fish" variant="extended" onClick={onCancel}>
                    {d.CANCEL}
                </Fab>
            </Grid>
        </>
    )
}


export default AddMarkerView;
