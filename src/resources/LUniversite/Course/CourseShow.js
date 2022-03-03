import React from 'react';
import {
  TextField,
  SimpleShowLayout,
  UrlField,
  RichTextField,
  ImageField,
  DateField
} from 'react-admin';
import { Show, SeparatedListField } from '@semapps/archipelago-layout';
import { ReferenceArrayField } from "@semapps/semantic-data-provider";
import CourseTitle from './CourseTitle';

const CourseShow = props => (
  <Show title={<CourseTitle />} {...props}>
    <SimpleShowLayout>
      <TextField source="pair:label" />
      <DateField source="pair:startDate" />
      <DateField source="pair:endDate" />
      <RichTextField source="pair:comment" />
      <UrlField source="pair:webPage" />
      <ImageField source="pair:depictedBy" />
      <ReferenceArrayField source="pair:hasTopic" reference="Theme" linkType={false}>
        <SeparatedListField link="show">
          <TextField source="pair:label" />
        </SeparatedListField>
      </ReferenceArrayField>
    </SimpleShowLayout>
  </Show>
);

export default CourseShow;
