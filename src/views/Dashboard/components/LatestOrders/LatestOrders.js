import React, { useState } from 'react';
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
import { StatusBullet } from 'components';
import uuid from 'uuid';

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
  delivered: 'success',
  pending: 'info',
  refunded: 'danger'
};

const LatestOrders = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const [orders] = useState(JsonMock);

  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({});

  const abi = [
    {
      constant: true,
      inputs: [],
      name: 'mintingFinished',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [{ name: '', type: 'string' }],
      payable: false,
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { name: '_spender', type: 'address' },
        { name: '_value', type: 'uint256' }
      ],
      name: 'approve',
      outputs: [],
      payable: false,
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { name: '_from', type: 'address' },
        { name: '_to', type: 'address' },
        { name: '_value', type: 'uint256' }
      ],
      name: 'transferFrom',
      outputs: [],
      payable: false,
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      type: 'function'
    },
    {
      constant: false,
      inputs: [],
      name: 'unpause',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { name: '_to', type: 'address' },
        { name: '_amount', type: 'uint256' }
      ],
      name: 'mint',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'paused',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      type: 'function'
    },
    {
      constant: true,
      inputs: [{ name: '_owner', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ name: 'balance', type: 'uint256' }],
      payable: false,
      type: 'function'
    },
    {
      constant: false,
      inputs: [],
      name: 'finishMinting',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      type: 'function'
    },
    {
      constant: false,
      inputs: [],
      name: 'pause',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'owner',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [{ name: '', type: 'string' }],
      payable: false,
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { name: '_to', type: 'address' },
        { name: '_value', type: 'uint256' }
      ],
      name: 'transfer',
      outputs: [],
      payable: false,
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { name: '_to', type: 'address' },
        { name: '_amount', type: 'uint256' },
        { name: '_releaseTime', type: 'uint256' }
      ],
      name: 'mintTimelocked',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        { name: '_owner', type: 'address' },
        { name: '_spender', type: 'address' }
      ],
      name: 'allowance',
      outputs: [{ name: 'remaining', type: 'uint256' }],
      payable: false,
      type: 'function'
    },
    {
      constant: false,
      inputs: [{ name: 'newOwner', type: 'address' }],
      name: 'transferOwnership',
      outputs: [],
      payable: false,
      type: 'function'
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: 'to', type: 'address' },
        { indexed: false, name: 'value', type: 'uint256' }
      ],
      name: 'Mint',
      type: 'event'
    },
    { anonymous: false, inputs: [], name: 'MintFinished', type: 'event' },
    { anonymous: false, inputs: [], name: 'Pause', type: 'event' },
    { anonymous: false, inputs: [], name: 'Unpause', type: 'event' },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: 'owner', type: 'address' },
        { indexed: true, name: 'spender', type: 'address' },
        { indexed: false, name: 'value', type: 'uint256' }
      ],
      name: 'Approval',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: 'from', type: 'address' },
        { indexed: true, name: 'to', type: 'address' },
        { indexed: false, name: 'value', type: 'uint256' }
      ],
      name: 'Transfer',
      type: 'event'
    }
  ];
  const address = '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07';
  const rpcURL =
    'https://mainnet.infura.io/v3/35d85ee041f8443ba0b37fad6d7e8332';

  const web3 = new Web3(rpcURL);
  web3.eth.getAccounts().then(console.log);

  
  const fetchData = () => {
    const contract = new web3.eth.Contract(abi, address);
    contract.methods.name().call((err, result) => {
      setData({ name: result });
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
    fetchData();
  };

  const handleClose = () => {
    setOpen(false);
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
                    <TableCell>Contract ID</TableCell>
                    <TableCell>Company</TableCell>
                    <TableCell sortDirection="desc">
                      <Tooltip
                        enterDelay={300}
                        title="Sort"
                      >
                        <TableSortLabel
                          active
                          direction="desc"
                        >
                          Due Date
                        </TableSortLabel>
                      </Tooltip>
                    </TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map(order => (
                    <TableRow
                      hover
                      key={uuid()}
                      onClick={handleClickOpen}
                    >
                      <TableCell>{order.contract_id}</TableCell>
                      <TableCell>{order.company_name}</TableCell>
                      <TableCell>{order.end_at}</TableCell>
                      <TableCell>
                        <div className={classes.statusContainer}>
                          <StatusBullet
                            className={classes.status}
                            color={statusColors[order.status]}
                            size="sm"
                          />
                          {order.status}
                        </div>
                      </TableCell>
                      <TableCell>{order.amounut}</TableCell>
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
      <Dialog
        aria-describedby="alert-dialog-description"
        aria-labelledby="alert-dialog-title"
        onClose={handleClose}
        open={open}
      >
        <DialogTitle
          className={classes.dialogTitle}
          id="alert-dialog-title"
        >
          <Grid
            alignContent="center"
            container
            justify="center"
            spacing={4}
          >
            <Grid
              item
              xs={10}
            >
              <Typography
                style={{ marginTop: '18px' }}
                variant="h3"
              >
                Contract Details
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
            >
              <DialogActions>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </DialogActions>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {data.name}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
