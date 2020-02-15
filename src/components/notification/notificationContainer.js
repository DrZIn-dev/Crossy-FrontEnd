import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    boxShadow:
      '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)'
  }
}));
const NotificationsContainer = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return <Paper
    {...rest}
    className={clsx(classes.root, className)}
         ></Paper>;
};
