import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';

const companies = [
    {
      value: 'Odds And Ends',
      label: 'Odds And Ends',
    },
    {
      value: 'Knick Knacks',
      label: 'Knick Knacks',
    },
    {
      value: 'Et Cetera Systems',
      label: 'Et Cetera Systems',
    },
    {
      value: 'Random Row',
      label: 'Random Row',
    },
  ];

  const period = [
    {
        value: 15,
        label: '15 day'
    },
    {
        value: 30,
        label: '30 day'
    },
    {
        value: 45,
        label: '45 day'
    },
    {
        value: 60,
        label: '2 month'
    },
    {
        value: 90,
        label: '3 month'
    }
  ]

export default function FormContract(props) {
    const [company, setCompany] = useState('');
    const [amount, setAmount] = useState(0);
    const [pieces,setPiecse] = useState(0);
    const [duration, setDuration] = useState(0);
    const [product, setProduct] = useState('');
    const [rate, setRate] = useState(0);

  const handleClose = () => {
    props.close()
  };

  const handleCompany = event => {
    setCompany(event.target.value);
  };
  
  const handleAmount = event => {
      setAmount(event.target.value);
  };

  const handlaPieces = event => {
      setPiecse(event.target.value)
  }

  const handleDuration = e => {
      setDuration(e.target.value);
  }

  const handleProduct = e => {
      setProduct(e.target.value);
  }

  const handleRate = e => {
      setRate(e.target.value);
  }

  const onSubmit = () =>{
    console.log({
        'company' : company,
        'product' : product,
        'pieces' : pieces,
        'amount' : amount,
        'duration': duration,
        'rate' : rate
    })
    setCompany('')
    setDuration('')
    props.close()
  }
  
  
  return (
    <div>
        <Dialog open={props.open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Contract</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>

          <TextField
          id="filled-select-company"
          select
          margin="dense"
          label="Company"
          value={company}
          onChange={handleCompany}
          fullWidth
        >
          {companies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

          <TextField
            autoFocus
            id="item"
            label="Product"
            type="product"
            fullWidth
            onChange={handleProduct}
          />

        <TextField
          id="pieces"
          label="Pieces"
          margin="dense"
          type="number"
          defaultValue={0}
          onChange={handlaPieces}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />

        <TextField
          id="amount"
          label="Amount"
          margin="dense"
          type="number"
          defaultValue={0}
          onChange={handleAmount}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />

        <TextField
          id="rate"
          label="Rate"
          margin="dense"
          type="number"
          defaultValue={0}
          onChange={handleRate}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
        
        <TextField
          id="filled-select-period"
          select
          margin="dense"
          label="Duration"
          value={duration}
          onChange={handleDuration}
          fullWidth
        >
          {period.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
