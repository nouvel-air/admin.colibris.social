import React from 'react';
import {
  TextField,
  Show,
  TabbedShowLayout,
  Tab,
  ImageField,
  UrlField,
  RichTextField,
  ReferenceField
} from 'react-admin';
import { ActivitiesList, ActivitiesGrid, CollectionList, ActorsGrid } from '@semapps/react-admin';
import ProjectTitle from './ProjectTitle';

const ProjectShow = props => (
  <Show title={<ProjectTitle />} {...props}>
    <TabbedShowLayout>
      <Tab label="Description">
        <TextField source="pair:label" />
        <UrlField source="pair:aboutPage" />
        <ImageField source="image" />
        <RichTextField source="pair:description" />
        <ReferenceField reference="ProjectStatus" source="pair:hasStatus">
          <TextField source="pair:label" />
        </ReferenceField>
      </Tab>
      <Tab label="Activités émises">
        <ActivitiesList source="outbox">
          <ActivitiesGrid />
        </ActivitiesList>
      </Tab>
      <Tab label="Activités reçues">
        <ActivitiesList source="inbox">
          <ActivitiesGrid />
        </ActivitiesList>
      </Tab>
      <Tab label="Abonnés">
        <CollectionList source="followers">
          <ActorsGrid />
        </CollectionList>
      </Tab>
      <Tab label="Abonnements">
        <CollectionList source="following">
          <ActorsGrid />
        </CollectionList>
      </Tab>
    </TabbedShowLayout>
  </Show>
);

export default ProjectShow;
