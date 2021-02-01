import React from 'react';
import { List, Datagrid, TextField, ShowButton } from 'react-admin';

const OrganizationList = props => (
  <List perPage={25} {...props}>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <TextField source="preferredUsername" />
      <ShowButton basePath="/Organization" />
    </Datagrid>
  </List>
);

export default OrganizationList;
