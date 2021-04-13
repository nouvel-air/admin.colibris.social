import React from 'react';
import { Create } from '@semapps/archipelago-layout';
import HostingServiceForm from './HostingServiceForm';

const HostingServiceCreate = props => (
  <Create title="Créer une offre d'hébergement" {...props}>
    <HostingServiceForm />
  </Create>
);

export default HostingServiceCreate;
