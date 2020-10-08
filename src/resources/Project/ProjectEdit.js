import React from 'react';
import { Edit, TabbedForm, FormTab, TextInput, AutocompleteArrayInput, NumberInput } from 'react-admin';
import MarkdownInput from 'ra-input-markdown';
import { JsonLdReferenceInput, DateTimeInput } from '@semapps/react-admin';

const ProjectTitle = ({ record }) => {
  return <span>Projet {record ? `"${record['pair:label']}"` : ''}</span>;
};

const ProjectEdit = props => (
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
            optionText={record => (record ? record['pair:preferedLabel'] || record['semapps:label'] : 'Test')}
            fullWidth
          />
        </JsonLdReferenceInput>
        <JsonLdReferenceInput label="Soutenu par" reference="Actor" source="pair:involves">
          <AutocompleteArrayInput optionText={record => record.name} fullWidth />
        </JsonLdReferenceInput>
        <JsonLdReferenceInput label="Offre" reference="HostingService" source="pair:offers">
          <AutocompleteArrayInput
            optionText={record => (record['pair:description'] ? record['pair:description'].substring(0, 50) : '')}
            fullWidth
          />
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

export default ProjectEdit;
