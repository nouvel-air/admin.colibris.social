import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  useAuthenticated,
} from 'react-admin';
import { DateField } from '@semapps/react-admin';
import SearchFilter from '../../components/SearchFilter';

const NoteList = props => {
  useAuthenticated();
  return (
    <List title="Actualités" perPage={25} filters={<SearchFilter />} {...props}>
      <Datagrid rowClick="edit">
        <DateField showTime source="published" label="Publié le" />
        <TextField source="name" label="Nom" />
        <EditButton basePath="/Note" />
      </Datagrid>
    </List>
  );
};

export default NoteList;
