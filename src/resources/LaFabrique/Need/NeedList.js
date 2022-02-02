import React from 'react';
import { Datagrid, TextField, ShowButton, SelectField, DateField } from 'react-admin';
import { MultiViewsList } from "@semapps/archipelago-layout";
import ListIcon from "@material-ui/icons/List";

const NeedList = props => (
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
            <SelectField source="type" choices={[
              { id: 'pair:HumanBasedResource', name: 'Compétences' },
              { id: 'pair:MoneyBasedResource', name: 'Financement' },
              { id: 'pair:AtomBasedResource', name: 'Matériel' }
            ]} />
            <DateField source="created" />
            <ShowButton basePath="/Organization" />
          </Datagrid>
      }
    }}
    {...props}
  />
);

export default NeedList;
