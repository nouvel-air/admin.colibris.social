import React from 'react';
import { Admin, Resource } from 'react-admin';

import i18nProvider from './config/i18nProvider';
import dataProvider from './config/dataProvider';
import * as resources from './resources';

import ColibrisLayout from './components/ColibrisLayout';
import colibrisTheme from './theme';

function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
      theme={colibrisTheme}
      layout={ColibrisLayout}
    >
      {Object.entries(resources).map(([key, resource]) => (
        <Resource key={key} name={key} {...resource.config} />
      ))}
    </Admin>
  );
}

export default App;
