import React from 'react';
import {
  List,
  Datagrid,
  Edit,
  TabbedForm,
  FormTab,
  TextField,
  EditButton,
  TextInput,
  useAuthenticated,
  AutocompleteArrayInput,
  ShowButton,
  NumberInput
} from 'react-admin';
import MarkdownInput from 'ra-input-markdown';
import SettingsIcon from '@material-ui/icons/Settings';
import {
  JsonLdReferenceInput,
  DateTimeInput
} from '@semapps/react-admin';

export const ProjectIcon = SettingsIcon;

export const ProjectList = props => {
  useAuthenticated();
  return (
    <List title="Projets La Fabrique" {...props}>
      <Datagrid rowClick="edit">
        <TextField source="pair:label" label="Nom" />
        <EditButton basePath="/Project" />
      </Datagrid>
    </List>
  );
};

const ProjectTitle = ({ record }) => {
  return <span>Projet {record ? `"${record['pair:label']}"` : ''}</span>;
};

export const ProjectEdit = props => (
  <Edit title={<ProjectTitle />} {...props}>
    <TabbedForm>
      <FormTab label="Général">
        <TextInput source="pair:label" label="Nom" fullWidth />
        <MarkdownInput multiline source="pair:description" label="Description" fullWidth />
        <TextInput source="pair:aboutPage" label="Site web" fullWidth />
        <TextInput source="image.url" label="Image" fullWidth />
        <DateTimeInput source="published" label="Publié le" fullWidth />
        <DateTimeInput source="updated" label="Mis à jour le" fullWidth />
      </FormTab>
      <FormTab label="Liens">
        <JsonLdReferenceInput label="Tags" reference="Tag" source="pair:interestOf">
          <AutocompleteArrayInput
            optionText={record => record ? record['pair:preferedLabel'] || record['semapps:label'] : 'Test'}
            fullWidth
          />
        </JsonLdReferenceInput>
        <JsonLdReferenceInput label="Soutenu par" reference="Actor" source="pair:involves">
          <AutocompleteArrayInput optionText={record => record.name} fullWidth />
        </JsonLdReferenceInput>
      </FormTab>
      <FormTab label="Localisation">
        <TextInput source="location.name" label="Nom" fullWidth />
        <NumberInput source="location.latitude" label="Latitude" fullWidth />
        <NumberInput source="location.longitude" label="Longitude" fullWidth />
      </FormTab>
    </TabbedForm>
  </Edit>
);
