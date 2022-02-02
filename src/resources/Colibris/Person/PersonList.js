import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

const PersonList = props => (
  <List perPage={25} {...props}>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <TextField source="preferredUsername" />
    </Datagrid>
  </List>
);

export default PersonList;
