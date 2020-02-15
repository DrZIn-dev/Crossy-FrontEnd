import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Web3 from 'web3';
const companies = [
  {
    value: 'Odds And Ends',
    label: 'Odds And Ends'
  },
  {
    value: 'Knick Knacks',
    label: 'Knick Knacks'
  },
  {
    value: 'Et Cetera Systems',
    label: 'Et Cetera Systems'
  },
  {
    value: 'Random Row',
    label: 'Random Row'
  }
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
];

export default function FormContract(props) {
  const [company, setCompany] = useState('');
  const [amount, setAmount] = useState(0);
  const [pieces, setPiecse] = useState(0);
  const [duration, setDuration] = useState(0);
  const [product, setProduct] = useState('');
  const [rate, setRate] = useState(0);
  const abi = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'issuer',
          type: 'string'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'duration',
          type: 'string'
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'purchaseName',
          type: 'string'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'purchaseAmount',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'initialDate',
          type: 'uint256'
        }
      ],
      name: 'ContractCreated',
      type: 'event'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      name: 'contracts',
      outputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256'
        },
        {
          internalType: 'string',
          name: 'issuer',
          type: 'string'
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256'
        },
        {
          internalType: 'string',
          name: 'duration',
          type: 'string'
        },
        {
          internalType: 'string',
          name: 'purchaseName',
          type: 'string'
        },
        {
          internalType: 'uint256',
          name: 'purchaseAmount',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'initialDate',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'count',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'string',
          name: '_issuer',
          type: 'string'
        },
        {
          internalType: 'uint256',
          name: '_amount',
          type: 'uint256'
        },
        {
          internalType: 'string',
          name: '_duration',
          type: 'string'
        },
        {
          internalType: 'string',
          name: '_purchase_name',
          type: 'string'
        },
        {
          internalType: 'uint256',
          name: '_purchase_amount',
          type: 'uint256'
        }
      ],
      name: 'createContract',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: '_id',
          type: 'uint256'
        }
      ],
      name: 'getContract',
      outputs: [
        {
          internalType: 'string',
          name: 'issuer',
          type: 'string'
        },
        {
          internalType: 'string',
          name: 'purchaseName',
          type: 'string'
        },
        {
          internalType: 'uint256',
          name: 'duration',
          type: 'uint256'
        },
        {
          internalType: 'string',
          name: 'purchaseAmount',
          type: 'string'
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'initialDate',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    }
  ];
  const address = '0x2369eaC786D77EA16E47270706EE2995195c51dD';
  const rpcURL = 'http://127.0.0.1:7545';
  const web3 = new Web3(rpcURL);
  web3.eth.getAccounts().then(console.log);

  const handleClose = () => {
    props.close();
  };

  const handleCompany = event => {
    setCompany(event.target.value);
  };

  const handleAmount = event => {
    setAmount(event.target.value);
  };

  const handlaPieces = event => {
    setPiecse(event.target.value);
  };

  const handleDuration = e => {
    setDuration(e.target.value);
  };

  const handleProduct = e => {
    setProduct(e.target.value);
  };

  const handleRate = e => {
    setRate(e.target.value);
  };

  const onSubmit = () => {
    console.log({
      company: company,
      product: product,
      pieces: pieces,
      amount: amount,
      duration: duration,
      rate: rate
    });

    const contract = new web3.eth.Contract(abi, address);
    contract.methods
      .createContract(
        company,
        parseInt(amount),
        duration.toString(),
        product,
        parseInt(pieces)
      )
      .send({
        from: '0x29c8A56Ca7fe79401Aa830B406F3aa2Cd92C6eFF',
        gas: 3000000
      });

    setCompany('');
    setDuration('');

    props.close();
  };

  return (
    <div>
      <Dialog
        aria-labelledby="form-dialog-title"
        open={props.open}
      >
        <DialogTitle id="form-dialog-title">New Contract</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>

          <TextField
            fullWidth
            id="filled-select-company"
            label="Company"
            margin="dense"
            onChange={handleCompany}
            select
            value={company}
          >
            {companies.map(option => (
              <MenuItem
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            autoFocus
            fullWidth
            id="item"
            label="Product"
            onChange={handleProduct}
            type="product"
          />

          <TextField
            defaultValue={0}
            fullWidth
            id="pieces"
            InputLabelProps={{
              shrink: true
            }}
            label="Pieces"
            margin="dense"
            onChange={handlaPieces}
            type="number"
          />

          <TextField
            defaultValue={0}
            fullWidth
            id="amount"
            InputLabelProps={{
              shrink: true
            }}
            label="Amount"
            margin="dense"
            onChange={handleAmount}
            type="number"
          />

          <TextField
            defaultValue={0}
            fullWidth
            id="rate"
            InputLabelProps={{
              shrink: true
            }}
            label="Rate"
            margin="dense"
            onChange={handleRate}
            type="number"
          />

          <TextField
            fullWidth
            id="filled-select-period"
            label="Duration"
            margin="dense"
            onChange={handleDuration}
            select
            value={duration}
          >
            {period.map(option => (
              <MenuItem
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
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
  );
}
