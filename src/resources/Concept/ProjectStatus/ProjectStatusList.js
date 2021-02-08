import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

const ProjectStatusList = props => (
  <List perPage={25} {...props}>
    <Datagrid>
      <TextField source="pair:label" />
    </Datagrid>
  </List>
);

export default ProjectStatusList;
