import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import React from 'react';
import { TextField } from '@material-ui/core';

export const AssignCategoryDialogue = ({ open, setOpen, categories, category }: any) => {
    const handleClose = () => {
        setOpen(false);
    };
    const [value, setValue] = React.useState(category);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Assign category"}</DialogTitle>
            <DialogContent>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Category</FormLabel>
                    <RadioGroup aria-label="Category" name="category1" value={value} onChange={handleChange}>
                        {categories && categories?.map((category: any) => <FormControlLabel value={category} color="primary"
                            control={<Radio color="primary" />} label={category} />)}
                    </RadioGroup>
                </FormControl>
                <br/>
                <br/>
                <br/>
                <TextField
                    margin="dense"
                    id="category"
                    label="Other category"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
          </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Save
          </Button>
            </DialogActions>
        </Dialog>
    )
}
