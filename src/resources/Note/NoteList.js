import React from 'react';
import { List, Datagrid, TextField, EditButton, DateField } from 'react-admin';

const NoteList = props => (
  <List perPage={25} {...props}>
    <Datagrid rowClick="edit">
      <DateField showTime source="published" />
      <TextField source="name" />
      <EditButton basePath="/Note" />
    </Datagrid>
  </List>
);

export default NoteList;
