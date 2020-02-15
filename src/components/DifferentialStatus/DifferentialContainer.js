import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const DifferentialCcontainer = ({ status, change }) => {
  const classes = useStyles();
  return (
    <>
      {(() => {
        switch (status) {
          case 'down':
            return (
              <>
                <ArrowDownwardIcon className={classes.differenceIcon} />
                <Typography
                  className={classes.differenceValue}
                  variant="body2"
                >
                  {change}%
                </Typography>
              </>
            );
          case 'up':
            return (
              <>
                <ArrowUpwardIcon className={classes.differenceIconUp} />
                <Typography
                  className={classes.differenceValueUp}
                  variant="body2"
                >
                  {change}%
                </Typography>
              </>
            );
          default:
            return (
              <>
                <RemoveIcon className={classes.differenceIconUp} />
                <Typography
                  className={classes.differenceValueUp}
                  variant="body2"
                >
                  {change}%
                </Typography>
              </>
            );
        }
      })()}
    </>
  );
};

export default DifferentialCcontainer;
