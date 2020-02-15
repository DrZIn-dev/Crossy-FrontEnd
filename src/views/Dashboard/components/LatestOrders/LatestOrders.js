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

  const handleClickOpen = () => {
    setOpen(true);
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
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
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
