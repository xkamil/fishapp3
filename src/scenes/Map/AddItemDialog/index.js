import React from 'react';
import {setMapMode} from "../../../redux/actions/mapActions";
import MapMode from "../../../model/mapMode";
import {redirectTo} from "../../../redux/actions/appActions";
import AddItemDialogView from "./view";

const fishTypes = [
    {title: 'Okoń', name: 'okon'},
    {title: 'Sum', name: 'sum'},
    {title: 'Szczupak', name: 'szczupak'},
];

function AddItemDialog() {

    function onSave() {
    }

    function onCancel() {
        setMapMode(MapMode.VIEW_MARKERS);
        redirectTo('/map')
    }

    return <AddItemDialogView
        fishTypes={fishTypes}
        onSave={onSave}
        onCancel={onCancel}/>
}

export default AddItemDialog;
