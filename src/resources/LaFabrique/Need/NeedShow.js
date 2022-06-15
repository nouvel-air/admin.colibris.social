import React from 'react';
import {
  TextField,
  SimpleShowLayout,
  UrlField,
  RichTextField,
  SelectField
} from 'react-admin';
import { Show } from '@semapps/archipelago-layout';
import { ReferenceField } from "@semapps/semantic-data-provider";
import NeedTitle from './NeedTitle';

const NeedShow = props => (
  <Show title={<NeedTitle />} {...props}>
    <SimpleShowLayout>
      <TextField source="pair:label" />
      <RichTextField source="pair:description" />
      <SelectField source="type" choices={[
        { id: 'pair:HumanBasedResource', name: 'Compétences' },
        { id: 'pair:MoneyBasedResource', name: 'Financement' },
        { id: 'pair:AtomBasedResource', name: 'Matériel' }
      ]} />
      <UrlField source="pair:webPage" />
      <ReferenceField source="pair:neededBy" reference="Project" linkType="show">
        <TextField source="pair:label" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);

export default NeedShow;
