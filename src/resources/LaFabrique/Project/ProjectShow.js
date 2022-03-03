import React from 'react';
import {
  TextField,
  SimpleShowLayout,
  UrlField,
  RichTextField,
  ImageField
} from 'react-admin';
import {SeparatedListField, Show, SimpleList} from '@semapps/archipelago-layout';
import ProjectTitle from './ProjectTitle';
import {ReferenceArrayField} from "@semapps/semantic-data-provider";

const ProjectShow = props => (
  <Show title={<ProjectTitle />} {...props}>
    <SimpleShowLayout>
      <TextField source="pair:label" />
      <RichTextField source="pair:description" />
      <UrlField source="pair:aboutPage" />
      <ImageField source="pair:depictedBy" />
      <ReferenceArrayField source="pair:hasTopic" reference="Theme">
        <SeparatedListField linkType={false}>
          <TextField source="pair:label" />
        </SeparatedListField>
      </ReferenceArrayField>
      <ReferenceArrayField source="pair:needs" reference="Need">
        <SimpleList primaryText={data => data && data?.['pair:label']} linkType="show" />
      </ReferenceArrayField>
    </SimpleShowLayout>
  </Show>
);

export default ProjectShow;
