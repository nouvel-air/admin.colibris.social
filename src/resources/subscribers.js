import React from 'react';
import { List, Datagrid, TextField, SelectField, SingleFieldList, ChipField, useAuthenticated, ReferenceArrayField } from 'react-admin';
import Icon from '@material-ui/icons/Email';

export const SubscriberIcon = Icon;

export const SubscriberList = props => {
  useAuthenticated();
  return (
    <List title="Abonnés Mailer" perPage={25} {...props}>
      <Datagrid>
        <TextField source="pair:e-mail" label="Adresse e-mail" />
        <TextField source="location.name" label="Localisation" />
        <SelectField source="location.radius" choices={[
          { id: '100000.0', name: '100km' },
          { id: '50000.0', name: '50km' },
          { id: '25000.0', name: '25km' },
        ]} label="Distance" />
        <ReferenceArrayField reference="Theme" source="pair:hasInterest" label="Intérêts">
          <SingleFieldList>
            <ChipField source="pair:preferedLabel" />
          </SingleFieldList>
        </ReferenceArrayField>
        <SelectField source="semapps:mailFrequency" choices={[
          { id: 'weekly', name: 'Semaine' },
          { id: 'daily', name: 'Jour' },
        ]} label="Fréquence désirée" />
      </Datagrid>
    </List>
  );
};