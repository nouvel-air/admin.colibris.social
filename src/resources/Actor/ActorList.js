import React from 'react';
import { List, Datagrid, TextField, useAuthenticated, ShowButton } from 'react-admin';
import SearchFilter from '../../components/SearchFilter';

const ActorList = props => {
  useAuthenticated();
  return (
    <List title="Acteurs" perPage={25} filters={<SearchFilter />} {...props}>
      <Datagrid rowClick="show">
        <TextField source="name" label="Nom" />
        <TextField source="preferredUsername" label="Username" />
        <ShowButton basePath="/Actor" />
      </Datagrid>
    </List>
  );
};

export default ActorList;
