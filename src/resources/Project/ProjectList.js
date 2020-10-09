import React from 'react';
import { List, Datagrid, TextField, EditButton, useAuthenticated } from 'react-admin';

import SearchFilter from '../../components/SearchFilter';

const ProjectList = props => {
  useAuthenticated();
  return (
    <List title="Projets La Fabrique" perPage={25} filters={<SearchFilter />} {...props}>
      <Datagrid rowClick="edit">
        <TextField source="pair:label" label="Nom" />
        <EditButton basePath="/Project" />
      </Datagrid>
    </List>
  );
};

export default ProjectList;
