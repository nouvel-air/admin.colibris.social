import React from 'react';
import { List, useAuthenticated } from 'react-admin';
import Icon from '@material-ui/icons/FlashOn';
import { ActivitiesGrid } from '@semapps/react-admin';

export const ActivityIcon = Icon;

export const ActivityList = props => {
  useAuthenticated();
  return (
    <List title="Activités" perPage={25} {...props}>
      <ActivitiesGrid />
    </List>
  );
};
