import React from 'react';
import { Admin, Resource } from 'react-admin';
import { Layout } from '@semapps/archipelago-layout';

import i18nProvider from './config/i18nProvider';
import dataProvider from './config/dataProvider';
import theme from './config/theme';
import * as resources from './resources';
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";

function App() {
  return (
    <Admin
      title="colibris.social"
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
      theme={theme}
      layout={Layout}
      dashboard={StatisticsPage}
    >
      {Object.entries(resources).map(([key, resource]) => (
        <Resource key={key} name={key} {...resource.config} />
      ))}
    </Admin>
  );
}

export default App;
