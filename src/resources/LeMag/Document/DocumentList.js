import React from 'react';
import { Datagrid, TextField, ShowButton } from 'react-admin';
import { MultiViewsList } from "@semapps/archipelago-layout";
import ListIcon from "@material-ui/icons/List";

const DocumentList = props => (
  <MultiViewsList
    views={{
      list: {
        label: 'Liste',
        icon: ListIcon,
        sort: { field: 'pair:label', order: 'ASC' },
        perPage: 25,
        list:
          <Datagrid rowClick="show">
            <TextField source="pair:label" />
            <ShowButton basePath="/Organization" />
          </Datagrid>
      }
    }}
    {...props}
  />
);

export default DocumentList;
