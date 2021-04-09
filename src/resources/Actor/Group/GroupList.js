import React from 'react';
import { List, Datagrid, TextField, ShowButton } from 'react-admin';

const GroupList = props => (
  <List perPage={25} {...props}>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <TextField source="preferredUsername" />
      <ShowButton />
    </Datagrid>
  </List>
);

export default GroupList;
