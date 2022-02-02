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
import EventTitle from './EventTitle';

const EventShow = props => (
  <Show title={<EventTitle />} {...props}>
    <SimpleShowLayout>
      <TextField source="pair:label" />
      <DateField source="pair:startDate" />
      <DateField source="pair:endDate" />
      <RichTextField source="pair:comment" />
      <UrlField source="pair:webPage" />
      <ImageField source="pair:depictedBy" />
      <ReferenceArrayField source="pair:hasTopic" reference="Theme">
        <SeparatedListField link={false}>
          <TextField source="pair:label" />
        </SeparatedListField>
      </ReferenceArrayField>
    </SimpleShowLayout>
  </Show>
);

export default EventShow;
