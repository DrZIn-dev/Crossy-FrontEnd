import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import RemoveIcon from '@material-ui/icons/Remove';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';

import MockData from './data_json';
const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.success.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.success.dark
  },
  differenceIconDown: {
    color: theme.palette.error.dark
  },
  differenceValueDown: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  }
}));

const TotalUsers = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              TOTAL COMPANY
            </Typography>
            <Typography variant="h3">{MockData.total}</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <PeopleIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <div className={classes.difference}>
          {(() => {
            switch (MockData.status) {
              case 'down':
                return (
                  <>
                    <ArrowDownwardIcon className={classes.differenceIconDown} />
                    <Typography
                      className={classes.differenceValueDown}
                      variant="body2"
                    >
                      {MockData.change}%
                    </Typography>
                  </>
                );
              case 'up':
                return (
                  <>
                    <ArrowUpwardIcon className={classes.differenceIcon} />
                    <Typography
                      className={classes.differenceValue}
                      variant="body2"
                    >
                      {MockData.change}%
                    </Typography>
                  </>
                );
              default:
                return (
                  <>
                    <RemoveIcon className={classes.differenceIcon} />
                    <Typography
                      className={classes.differenceValue}
                      variant="body2"
                    >
                      {MockData.change}%
                    </Typography>
                  </>
                );
            }
          })()}
          <Typography
            className={classes.caption}
            variant="caption"
          >
            Since last month
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

TotalUsers.propTypes = {
  className: PropTypes.string
};

export default TotalUsers;
