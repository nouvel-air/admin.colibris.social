import React from 'react';
import {
  Edit,
  TabbedForm,
  FormTab,
  TextInput,
  AutocompleteArrayInput,
  NumberInput,
  ReferenceInput,
  SelectInput
} from 'react-admin';
import MarkdownInput from 'ra-input-markdown';
import { copyValues, DateTimeInput } from '@semapps/react-admin';
import { UriArrayInput } from '@semapps/semantic-data-provider';
import ProjectTitle from "./ProjectTitle";

const decorators = [copyValues({ 'pair:label': 'name', 'pair:description': 'content', 'pair:aboutPage': 'url' })];

export const ProjectEdit = props => (
  <Edit title={<ProjectTitle />} {...props}>
    <TabbedForm decorators={decorators}>
      <FormTab label="Général">
        <TextInput source="pair:label" fullWidth />
        <MarkdownInput multiline source="pair:description" fullWidth />
        <TextInput source="pair:aboutPage" fullWidth />
        <ReferenceInput reference="ProjectStatus" source="pair:hasStatus">
          <SelectInput optionText="pair:label" />
        </ReferenceInput>
        <DateTimeInput source="published" fullWidth />
        <DateTimeInput source="updated" fullWidth />
      </FormTab>
      <FormTab label="Liens">
        <UriArrayInput reference="Theme" source="pair:hasTopic">
          <AutocompleteArrayInput optionText="pair:label" fullWidth />
        </UriArrayInput>
        <UriArrayInput reference="Actor" source="pair:supportedBy">
          <AutocompleteArrayInput optionText="pair:label" fullWidth />
        </UriArrayInput>
      </FormTab>
      <FormTab label="Localisation">
        <TextInput source="location[schema:address][schema:streetAddress]" fullWidth />
        <NumberInput source="location[schema:address][schema:postalCode]" fullWidth />
        <TextInput source="location[schema:address][schema:addressLocality]" fullWidth />
        <TextInput source="location[schema:address][schema:addressRegion]" fullWidth />
        <TextInput source="location[schema:address][schema:addressCountry]" fullWidth />
        <NumberInput source="location.latitude" fullWidth />
        <NumberInput source="location.longitude" fullWidth />
      </FormTab>
    </TabbedForm>
  </Edit>
);

export default ProjectEdit;
