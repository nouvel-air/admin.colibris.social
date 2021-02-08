import React from 'react';
import { List, Datagrid, EditButton, TextField, ReferenceField, SingleFieldList, ChipField } from 'react-admin';
import { UriArrayField } from '@semapps/semantic-data-provider';

export const HostingServiceList = props => (
  <List title="Offres d'hébergement" perPage={25} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="pair:label" />
      <ReferenceField source="pair:offeredBy" reference="Project">
        <TextField source="pair:label" />
      </ReferenceField>
      <UriArrayField reference="HostingServiceType" source="pair:hasType">
        <SingleFieldList>
          <ChipField source="pair:label" />
        </SingleFieldList>
      </UriArrayField>
      <EditButton basePath="/HostingService" />
    </Datagrid>
  </List>
);

export default HostingServiceList;
