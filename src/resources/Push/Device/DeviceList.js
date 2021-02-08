import React from 'react';
import { List, Datagrid, TextField, DateField, ReferenceField } from 'react-admin';

const DeviceList = props => (
  <List perPage={25} {...props}>
    <Datagrid>
      <DateField source="semapps:addedAt" />
      <ReferenceField reference="Person" source="semapps:ownedBy">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="semapps:name" />
      <TextField source="semapps:yearClass" />
      <TextField source="semapps:errorMessage" />
    </Datagrid>
  </List>
);

export default DeviceList;
