import React from 'react';
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import {Dialog, DialogContent} from "@material-ui/core";
import {useSelector} from "react-redux";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {setMapMode} from "../../redux/actions/mapActions";
import MapMode from "../../model/MapMode";
import {updateTmpMarker} from "../../redux/actions/markerActions";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";

const fishTypes = [
   {title: 'Okoń', name: 'okon'},
   {title: 'Sum', name: 'sum'},
   {title: 'Szczupak', name: 'szczupak'},
];

function AddItemDialog() {
   const mapMode = useSelector(store => store.map.mapMode);
   const tmpMarker = useSelector(store => store.map.tmpMarker);

   function onSave() {

   }

   function onCancel() {
      updateTmpMarker(null);
      setMapMode(MapMode.VIEW_MARKERS);
   }

   return (
           <Dialog open={mapMode === MapMode.SAVE_MARKER && !!tmpMarker}>
              <DialogContent dividers>
                 <Grid container spacing={2} direction="column">
                    <Grid item>
                       <Autocomplete
                               options={fishTypes}
                               getOptionLabel={option => option.title}

                               renderInput={params => (
                                       <TextField {...params} label="Fish type" fullWidth/>
                               )}
                       />
                    </Grid>

                    <Grid item>
                       <Input id="standard-basic" label="Length" endAdornment={<InputAdornment position="end">Cm</InputAdornment>}/>
                    </Grid>

                    <Grid item>
                       <Input id="standard-basic" label="Weight" endAdornment={<InputAdornment position="end">Kg</InputAdornment>}/>
                    </Grid>
                 </Grid>
              </DialogContent>

              <DialogActions>
                 <Button autoFocus color="primary" onClick={onSave}>
                    Save
                 </Button>
                 <Button autoFocus color="primary" onClick={onCancel}>
                    Cancel
                 </Button>
              </DialogActions>
           </Dialog>
   );

}

export default AddItemDialog;
