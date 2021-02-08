import React from 'react';
import { List, Datagrid, TextField, ShowButton } from 'react-admin';

const GroupList = props => (
  <List title="Organisations" perPage={25} {...props}>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <TextField source="preferredUsername" />
      <ShowButton basePath="/Group" />
    </Datagrid>
  </List>
);

export default GroupList;
