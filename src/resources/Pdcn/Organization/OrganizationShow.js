import React from 'react';
import {
  TextField,
  SimpleShowLayout,
  UrlField,
  RichTextField
} from 'react-admin';
import { Show, SeparatedListField } from '@semapps/archipelago-layout';
import { ReferenceArrayField } from "@semapps/semantic-data-provider";
import OrganizationTitle from './OrganizationTitle';

const OrganizationShow = props => (
  <Show title={<OrganizationTitle />} {...props}>
    <SimpleShowLayout>
      <TextField source="pair:label" />
      <RichTextField source="pair:description" />
      <UrlField source="pair:aboutPage" />
      <UrlField source="pair:webPage" />
      <ReferenceArrayField source="pair:hasTopic" reference="Theme">
        <SeparatedListField linkType={false}>
          <TextField source="pair:label" />
        </SeparatedListField>
      </ReferenceArrayField>
    </SimpleShowLayout>
  </Show>
);

export default OrganizationShow;
