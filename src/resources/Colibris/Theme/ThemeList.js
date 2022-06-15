import React from 'react';
import { List, Datagrid, TextField, ShowButton } from 'react-admin';

const ThemeList = props => (
  <List perPage={25} {...props}>
    <Datagrid>
      <TextField source="pair:label" />
      <ShowButton basePath="/Theme" />
    </Datagrid>
  </List>
);

export default ThemeList;
