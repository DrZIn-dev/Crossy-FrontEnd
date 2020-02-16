import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContentText,
  DialogContent,
  IconButton,
  Typography,
  Grid
} from '@material-ui/core';
import Web3 from 'web3';

import CloseIcon from '@material-ui/icons/Close';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import JsonMock from './data_json';
import { StatusBullet, ShowContract } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const statusColors = {
  Completed: 'success',
  process: 'info',
  Inactive: 'danger',
  Ongoing: 'warning'
};

const LatestOrders = props => {
  const { contractLst, className, ...rest } = props;
  const classes = useStyles();

  const [orders] = useState(JsonMock);

  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({});

  const abi = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
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
        },
        {
          indexed: false,
          internalType: 'enum Forward.State',
          name: 'state',
          type: 'uint8'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'currencyRate',
          type: 'uint256'
        }
      ],
      name: 'ContractCreated',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'enum Forward.State',
          name: 'state',
          type: 'uint8'
        }
      ],
      name: 'UpdateState',
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
        },
        {
          internalType: 'enum Forward.State',
          name: 'state',
          type: 'uint8'
        },
        {
          internalType: 'uint256',
          name: 'currencyRate',
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
        },
        {
          internalType: 'uint256',
          name: '_currencyRate',
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
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: '_id',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: '_setState',
          type: 'uint256'
        }
      ],
      name: 'setState',
      outputs: [],
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
      name: 'getContractState',
      outputs: [
        {
          internalType: 'enum Forward.State',
          name: 'state',
          type: 'uint8'
        }
      ],
      payable: false,
      stateMutability: 'view',
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
      name: 'getContractCurrency',
      outputs: [
        {
          internalType: 'uint256',
          name: 'currencyRate',
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
      name: 'getCount',
      outputs: [
        {
          internalType: 'uint256',
          name: 'length',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    }
  ];
  const address = '0x0707B506CA656039cc3C64A8c21f52147d3d4C14';
  const rpcURL = 'http://127.0.0.1:7545';

  const web3 = new Web3(rpcURL);

  const contract = new web3.eth.Contract(abi, address);

  const fetchData = async id => {
    await contract.methods.getContract(id).call(async (err, result) => {
      contract.methods.getContractState(id).call((err, res) => {
        setData({
          contractor: 'Shen Zhi',
          validator: result.issuer,
          product: result.purchaseName,
          pieces: result.purchaseAmount,
          amount: result.amount,
          rate: 30,
          status: res
        });
        return;
      });
    });
  };

  const handleClickOpen = async id => {
    await fetchData(id);
    await setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setData({});
  };

  return (
    <>
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <CardHeader title="Latest Contract" />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Status</TableCell>
                    <TableCell>Contract ID</TableCell>
                    <TableCell>Company</TableCell>
                    <TableCell>Duration</TableCell>
                    <TableCell>Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {console.log('hello ' + contractLst)}
                  {contractLst.map(order => (
                    <TableRow
                      hover
                      key={order.id}
                      onClick={() => handleClickOpen(order.id)}
                    >
                      <TableCell>
                        <div className={classes.statusContainer}>
                          <StatusBullet
                            className={classes.status}
                            color={statusColors[order.state]}
                            size="sm"
                          />
                          {order.state}
                        </div>
                      </TableCell>
                      <TableCell>{order.id}</TableCell>
                      <TableCell>{order.issuer}</TableCell>
                      <TableCell>{order.duration}</TableCell>
                      <TableCell>{order.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <Divider />
        <CardActions className={classes.actions}>
          <Button
            color="primary"
            size="small"
            variant="text"
          >
            View all <ArrowRightIcon />
          </Button>
        </CardActions>
      </Card>
      <ShowContract
        close={handleClose}
        data={data}
        open={open}
      />
    </>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
