import React from 'react';
import { List, Datagrid, TextField, ShowButton } from 'react-admin';
import SearchFilter from '../../../components/SearchFilter';

const OrganizationList = props => (
  <List perPage={25} filters={<SearchFilter />} {...props}>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <TextField source="preferredUsername" />
      <ShowButton basePath="/Organization" />
    </Datagrid>
  </List>
);

export default OrganizationList;
