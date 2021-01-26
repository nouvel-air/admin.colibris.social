import React from 'react';
import { List, Datagrid, TextField, EditButton, DateField } from 'react-admin';
import SearchFilter from '../../components/SearchFilter';

const NoteList = props => (
  <List perPage={25} filters={<SearchFilter />} {...props}>
    <Datagrid rowClick="edit">
      <DateField showTime source="published" />
      <TextField source="name" />
      <EditButton basePath="/Note" />
    </Datagrid>
  </List>
);

export default NoteList;
