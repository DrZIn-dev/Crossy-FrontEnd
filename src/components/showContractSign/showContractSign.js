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
  } = props.data;

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
          <DialogContentText />
          <TextField
            defaultValue=""
            fullWidth
            id="contractor"
            InputProps={{
              readOnly: true
            }}
            label="Contractor"
            margin="dense"
            value={contractor}
            variant="filled"
          />
          <TextField
            defaultValue=""
            fullWidth
            id="validator"
            InputProps={{
              readOnly: true
            }}
            label="Validator"
            margin="dense"
            value={validator}
            variant="filled"
          />
          <TextField
            defaultValue=""
            fullWidth
            id="product"
            InputProps={{
              readOnly: true
            }}
            label="Product"
            margin="dense"
            value={product}
            variant="filled"
          />
          <TextField
            defaultValue=""
            fullWidth
            id="pieces"
            InputProps={{
              readOnly: true
            }}
            label="Pieces"
            margin="dense"
            value={pieces}
            variant="filled"
          />
          <TextField
            defaultValue=""
            fullWidth
            id="amount"
            InputProps={{
              readOnly: true
            }}
            label="Amount"
            margin="dense"
            value={amount}
            variant="filled"
          />
          <TextField
            defaultValue=""
            fullWidth
            id="rate"
            InputProps={{
              readOnly: true
            }}
            label="Rate"
            margin="dense"
            value={rate}
            variant="filled"
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
  );
};

export default ShowContractSign;
