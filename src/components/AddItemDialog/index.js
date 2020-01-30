import React from 'react';
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import {Dialog, DialogContent} from "@material-ui/core";
import {useSelector} from "react-redux";
import {AppView} from "../../redux/actions/appActions";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function AddItemDialog() {
   const view = useSelector(store => store.app.view);


   return (
           <Dialog open={view === AppView.ADD_ITEM}>
              <DialogContent dividers>

              <Grid container spacing={2} direction="column">
                 <Grid item>
                    <InputLabel id="label">Fish type</InputLabel>
                    <Select labelId="label" id="select" value="20">
                       <MenuItem value="2">Okoń</MenuItem>
                       <MenuItem value="1">Szczupak krol wod</MenuItem>
                    </Select>
                 </Grid>

                 <Grid item>
                    <TextField id="standard-basic" label="Fish length" />
                 </Grid>
              </Grid>
              </DialogContent>
              <DialogActions>
                 <Button autoFocus color="primary">
                    Save changes
                 </Button>
              </DialogActions>
           </Dialog>
   );

}

export default AddItemDialog;
