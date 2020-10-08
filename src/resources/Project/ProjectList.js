import React from 'react';
import { List, Datagrid, TextField, EditButton, useAuthenticated, SingleFieldList, ChipField } from 'react-admin';

import SearchFilter from '../../components/SearchFilter';
import UriArrayField from "../../components/UriArrayField";

const ProjectList = props => {
  useAuthenticated();
  return (
    <List title="Projets La Fabrique" perPage={25} filters={<SearchFilter />} {...props}>
      <Datagrid rowClick="edit">
        <TextField source="pair:label" label="Nom" />
        <UriArrayField reference="Tag" source="pair:interestOf" label="Tags">
          <SingleFieldList>
            <ChipField source="pair:preferedLabel" />
          </SingleFieldList>
        </UriArrayField>
        <EditButton basePath="/Project" />
      </Datagrid>
    </List>
  );
};

export default ProjectList;
