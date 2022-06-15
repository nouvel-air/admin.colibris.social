import React from 'react';
import { SimpleForm, TextInput, ImageInput } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { Edit } from '@semapps/archipelago-layout';
import { ImageField } from '@semapps/semantic-data-provider';
import ServiceTitle from './ServiceTitle';

export const ServiceEdit = props => (
  <Edit title={<ServiceTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" />
      <TextInput source="pair:comment" fullWidth />
      <TextInput source="pair:webPage" fullWidth />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <ImageInput source="image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export default ServiceEdit;
