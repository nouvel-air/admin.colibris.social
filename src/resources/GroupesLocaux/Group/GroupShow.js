import React from 'react';
import {
  TextField,
  SimpleShowLayout,
  UrlField,
  EmailField
} from 'react-admin';
import { Show } from '@semapps/archipelago-layout';
import GroupTitle from './GroupTitle';

const GroupShow = props => (
  <Show title={<GroupTitle />} {...props}>
    <SimpleShowLayout>
      <TextField source="pair:label" />
      <EmailField source="pair:e-mail" />
      <UrlField source="pair:webPage" />
    </SimpleShowLayout>
  </Show>
);

export default GroupShow;
