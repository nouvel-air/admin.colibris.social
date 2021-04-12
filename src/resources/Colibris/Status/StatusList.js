import React from 'react';
import { Datagrid, EditButton, List, TextField } from 'react-admin';

const StatusList = props => (
  <List perPage={25} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="pair:label" />
      <TextField source="type" />
      {/*<EditButton />*/}
    </Datagrid>
  </List>
);

export default StatusList;
