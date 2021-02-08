import React from 'react';
import { Edit, SimpleForm, TextInput, AutocompleteArrayInput } from 'react-admin';
import MarkdownInput from 'ra-input-markdown';
import { DateTimeInput } from '@semapps/react-admin';
import { UriArrayInput } from '@semapps/semantic-data-provider';

const NoteTitle = ({ record }) => {
  return <span>Actualité {record ? `"${record.name}"` : ''}</span>;
};

const NoteEdit = props => (
  <Edit title={<NoteTitle />} {...props}>
    <SimpleForm>
      <TextInput source="name" fullWidth />
      <MarkdownInput source="content" fullWidth />
      <UriArrayInput reference="Project" source="attributedTo">
        <AutocompleteArrayInput optionText="pair:label" fullWidth />
      </UriArrayInput>
      <TextInput source="image" fullWidth />
      <DateTimeInput source="published" fullWidth />
      <DateTimeInput source="updated" fullWidth />
    </SimpleForm>
  </Edit>
);

export default NoteEdit;
