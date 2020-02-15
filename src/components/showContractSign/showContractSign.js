import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

 const ShowContractSign = props => {
    const {
        contractor,
        validator,
        product,
        pieces,
        amount,
        rate,
        status
    } = props.data

    const handleClose = () => {
      props.close();
    };
    return (
        <div>
                <Dialog
                aria-labelledby="form-dialog-title"
                open={props.open}
                >
                <DialogTitle id="form-dialog-title">Contract Signing</DialogTitle>
                <DialogContent>
                <DialogContentText>
                </DialogContentText>
                  <TextField
                    id="contractor"
                    label="Contractor"
                    defaultValue=""
                    value={contractor}
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="outlined"
                    fullWidth
                    margin='dense'
                  />
                  <TextField
                    id="validator"
                    label="Validator"
                    defaultValue=""
                    value={validator}
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="outlined"
                    fullWidth
                    margin='dense'
                  />
                  <TextField
                    id="product"
                    label="Product"
                    defaultValue=""
                    value={product}
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="outlined"
                    fullWidth
                    margin='dense'
                  />
                  <TextField
                    id="pieces"
                    label="Pieces"
                    defaultValue=""
                    value={pieces}
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="outlined"
                    fullWidth
                    margin='dense'
                  />
                  <TextField
                    id="amount"
                    label="Amount"
                    defaultValue=""
                    value={amount}
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="outlined"
                    fullWidth
                    margin='dense'
                  />
                  <TextField
                    id="rate"
                    label="Rate"
                    defaultValue=""
                    value={rate}
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="outlined"
                    fullWidth
                    margin='dense'
                  />

                </DialogContent>
                <DialogActions>
                <Button
                    color="primary"
                    onClick={handleClose}
                >
                    Close
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default ShowContractSign;