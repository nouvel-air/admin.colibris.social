import React from 'react';
import { List, Datagrid, TextField, DateField, ReferenceField } from 'react-admin';

const NotificationList = props => (
  <List perPage={25} {...props}>
    <Datagrid>
      <DateField source="semapps:addedAt" />
      <TextField source="semapps:status" />
      <TextField source="semapps:errorMessage" />
      <ReferenceField basePath="/Device" reference="Device" source="semapps:deviceId">
        <TextField source="semapps:name" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export default NotificationList;
