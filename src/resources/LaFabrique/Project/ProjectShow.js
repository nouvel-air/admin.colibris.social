import React from 'react';
import {
  TextField,
  SimpleShowLayout,
  UrlField,
  RichTextField
} from 'react-admin';
import { Show } from '@semapps/archipelago-layout';
import ProjectTitle from './ProjectTitle';

const ProjectShow = props => (
  <Show title={<ProjectTitle />} {...props}>
    <SimpleShowLayout>
      <TextField source="pair:label" />
      <RichTextField source="pair:description" />
      <UrlField source="pair:aboutPage" />
    </SimpleShowLayout>
  </Show>
);

export default ProjectShow;
