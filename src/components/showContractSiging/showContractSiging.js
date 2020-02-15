import react,{useState} from 'react';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';

export default ShowContractSigning = props => {
    const {
        contractor,
        validation,
        product,
        pieces,
        amount,
        rate,
        status
    } = props.data
    return (
        <div>
                <Dialog
                aria-labelledby="form-dialog-title"
                open={props.open}
                >
                <DialogTitle id="form-dialog-title">New Contract</DialogTitle>
                <DialogContent>

                  <TextField
                    id="contractor"
                    label="Read Only"
                    defaultValue=""
                    value={contractor}
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    id="validation"
                    label="Read Only"
                    defaultValue=""
                    value={validation}
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    id="product"
                    label="Read Only"
                    defaultValue=""
                    value={product}
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    id="pieces"
                    label="Read Only"
                    defaultValue=""
                    value={pieces}
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    id="amount"
                    label="Read Only"
                    defaultValue=""
                    value={amount}
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    id="rate"
                    label="Read Only"
                    defaultValue=""
                    value={rate}
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="outlined"
                    fullWidth
                  />

                </DialogContent>
                <DialogActions>
                <Button
                    color="primary"
                    onClick={handleClose}
                >
                    Cancel
                </Button>
                <Button
                    color="primary"
                    onClick={onSubmit}
                >
                    Submit
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}