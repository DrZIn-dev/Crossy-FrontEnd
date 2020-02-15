import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Paper,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { Inbox as InboxIcon, Drafts as DraftsIcon } from '@material-ui/icons';
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '350px',
    height: '30%'
  }
}));

const data = [
  { text: 'inbox ' },
  {
    text: 'email'
  }
];

const NotificationsContainer = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <Paper
      {...rest}
      className={clsx(classes.root, className)}
      tabIndex="-1"
    >
      <CardHeader
        tabIndex="-2"
        title={'notifications'}
      />
      <List
        aria-label="main mailbox folders"
        component="nav"
      >
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
    </Paper>
  );
};

export default NotificationsContainer;
