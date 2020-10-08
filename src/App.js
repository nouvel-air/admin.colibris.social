import React from 'react';
import { Admin, Resource } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import frenchMessages from 'ra-language-french';
import { dataProvider, httpClient } from '@semapps/react-admin';

import { ActorList, ActorShow, ActorIcon } from './resources/actors';
import { ActionList, ActionShow, ActionEdit, ActionIcon } from './resources/actions';
import { NoteList, NoteEdit, NoteIcon } from './resources/notes';
import { SubscriberList, SubscriberIcon } from './resources/subscribers';
import { ThemeList, ThemeIcon } from './resources/themes';
import { DeviceList, DeviceIcon } from './resources/devices';
import { NotificationList, NotificationIcon } from './resources/notifications';
import project from './resources/Project';
import hostingService from './resources/HostingService';

import ontologies from './config/ontologies';
import resources from './config/resources';
import ColibrisLayout from './components/ColibrisLayout';
import colibrisTheme from './theme';

function App() {
  return (
    <Admin
      dataProvider={dataProvider({
        sparqlEndpoint: process.env.REACT_APP_MIDDLEWARE_URL + 'sparql',
        httpClient,
        resources,
        ontologies,
        mainOntology: 'pair'
      })}
      i18nProvider={polyglotI18nProvider(() => frenchMessages)}
      theme={colibrisTheme}
      layout={ColibrisLayout}
    >
      <Resource name="Actor" list={ActorList} show={ActorShow} icon={ActorIcon} options={{ label: 'Acteurs' }} />
      <Resource name="Subscriber" list={SubscriberList} icon={SubscriberIcon} options={{ label: 'Abonnés Mailer' }} />
      <Resource
        name="Action"
        list={ActionList}
        show={ActionShow}
        edit={ActionEdit}
        icon={ActionIcon}
        options={{ label: 'Actions citoyennes' }}
      />
      <Resource name="Project" {...project} />
      <Resource name="HostingService" {...hostingService} />
      <Resource name="HostingServiceType" />
      <Resource name="Note" list={NoteList} edit={NoteEdit} icon={NoteIcon} options={{ label: 'Actualités' }} />
      <Resource name="Theme" list={ThemeList} icon={ThemeIcon} options={{ label: 'Thèmes' }} />
      <Resource name="Device" list={DeviceList} icon={DeviceIcon} options={{ label: 'Appareils' }} />
      <Resource
        name="Notification"
        list={NotificationList}
        icon={NotificationIcon}
        options={{ label: 'Notifications' }}
      />
      <Resource name="Tag" />
    </Admin>
  );
}

export default App;
