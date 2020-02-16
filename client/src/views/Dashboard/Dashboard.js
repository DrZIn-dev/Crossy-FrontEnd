import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Web3 from 'web3';

import {
  Budget,
  TotalUsers,
  TasksProgress,
  TotalProfit,
  LatestProducts,
  LatestOrders
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();
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

  const [contractLst, setContractLst] = useState([]);
  const contract = new web3.eth.Contract(abi, address);

  const fetchContract = async () => {
    contract.methods.getCount().call(async (req, res) => {
      let nums = Array.from(Array(parseInt(res)).keys());
      nums.map(num => {
        contract.methods.getContract(num).call(async (req, res) => {
          res.id = num;
          setContractLst(prev => [...prev, res]);
          console.log(contractLst);
        });
      });
    });
  };

  useEffect(() => {
    fetchContract();
  }, []);
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Budget />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalUsers />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TasksProgress />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalProfit />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <LatestProducts />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <LatestOrders contractLst={contractLst} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
