import React from 'react';
import {
  TextField,
  SimpleShowLayout,
  UrlField,
  RichTextField,
  ImageField
} from 'react-admin';
import { Show, SeparatedListField } from '@semapps/archipelago-layout';
import { ReferenceArrayField } from "@semapps/semantic-data-provider";
import DocumentTitle from './DocumentTitle';

const DocumentShow = props => (
  <Show title={<DocumentTitle />} {...props}>
    <SimpleShowLayout>
      <TextField source="pair:label" />
      <RichTextField source="pair:comment" />
      <UrlField source="pair:webPage" />
      <ImageField source="pair:depictedBy" />
      <ReferenceArrayField source="pair:hasTopic" reference="Theme">
        <SeparatedListField linkType={false}>
          <TextField source="pair:label" />
        </SeparatedListField>
      </ReferenceArrayField>
    </SimpleShowLayout>
  </Show>
);

export default DocumentShow;
