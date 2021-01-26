import React from 'react';
import { List, Datagrid, TextField, EditButton, ShowButton } from 'react-admin';
import ProjectFilterSidebar from "./ProjectFilterSidebar";

const ProjectList = props => (
  <List perPage={25} aside={<ProjectFilterSidebar />} {...props}>
    <Datagrid rowClick="show">
      <TextField source="pair:label" />
      <ShowButton basePath="/Project" />
      <EditButton basePath="/Project" />
    </Datagrid>
  </List>
);

export default ProjectList;
