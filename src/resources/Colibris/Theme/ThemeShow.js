import React from 'react';
import {
  TextField,
  SimpleShowLayout
} from 'react-admin';
import { Show } from '@semapps/archipelago-layout';
import ThemeTitle from './ThemeTitle';

const ThemeShow = props => (
  <Show title={<ThemeTitle />} {...props}>
    <SimpleShowLayout>
      <TextField source="pair:label" />
    </SimpleShowLayout>
  </Show>
);

export default ThemeShow;
