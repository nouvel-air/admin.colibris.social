import React from 'react';
import { List, Datagrid, TextField, useAuthenticated } from 'react-admin';
import Icon from '@material-ui/icons/Toys';

export const ThemeIcon = Icon;

export const ThemeList = props => {
  useAuthenticated();
  return (
    <List title="Thèmes" perPage={25} {...props}>
      <Datagrid>
        <TextField source="pair:preferedLabel" label="Nom" />
      </Datagrid>
    </List>
  );
};
