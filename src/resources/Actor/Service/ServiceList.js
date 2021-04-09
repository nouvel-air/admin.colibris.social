import React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

const ServiceList = props => (
  <List perPage={25} {...props}>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <TextField source="preferredUsername" />
      <EditButton />
    </Datagrid>
  </List>
);

export default ServiceList;
