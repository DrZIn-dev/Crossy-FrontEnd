import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Web3 from 'web3';
import abi from '../../config/abi';
import blockchain from '../../config/blockchain';

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
  const address = blockchain.address;
  const rpcURL = blockchain.rpcURL;

  const web3 = new Web3(rpcURL);

  const [contractLst, setContractLst] = useState([]);
  const contract = new web3.eth.Contract(abi, address);

  const fetchContract = async () => {
    contract.methods.getCount().call(async (err, res) => {
      let nums = Array.from(Array(parseInt(res)).keys());
      nums.reverse();
      nums.map(num => {
        contract.methods.getContract(num).call(async (err, res) => {
          contract.methods.getContractState(num).call((err_2, res_2) => {
            res.id = num;
            switch (parseInt(res_2)) {
              case 0:
                res.state = 'Ongoing';
                break;
              case 1:
                res.state = 'Inactive';
                break;
              case 2:
                res.state = 'Completed';
                break;
              default:
                res.state = 'Ongoing';
                break;
            }
            setContractLst(prev => [...prev, res]);
            console.log(contractLst);
          });
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
