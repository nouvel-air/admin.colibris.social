import React from 'react';
import { List, Datagrid, TextField, DateField, SelectField, SingleFieldList, ChipField } from 'react-admin';
import { UriArrayField } from '@semapps/semantic-data-provider';

const SubscriberList = props => (
  <List perPage={25} {...props}>
    <Datagrid>
      <TextField source="pair:e-mail" />
      <TextField source="location.name" />
      <SelectField
        source="location.radius"
        choices={[
          { id: '100000.0', name: '100km' },
          { id: '50000.0', name: '50km' },
          { id: '25000.0', name: '25km' }
        ]}
      />
      <DateField source="published" />
      <UriArrayField reference="Theme" source="pair:hasInterest">
        <SingleFieldList>
          <ChipField source="pair:preferedLabel" />
        </SingleFieldList>
      </UriArrayField>
      <SelectField
        source="semapps:mailFrequency"
        choices={[
          { id: 'weekly', name: 'Semaine' },
          { id: 'daily', name: 'Jour' }
        ]}
      />
    </Datagrid>
  </List>
);

export default SubscriberList;
