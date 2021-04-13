import React from 'react';
import { Edit } from '@semapps/archipelago-layout';
import HostingServiceForm from './HostingServiceForm';

const HostingServiceTitle = ({ record }) => {
  return <span>Offre d'hébergement {record ? `"${record['pair:label']}"` : ''}</span>;
};

const HostingServiceEdit = props => (
  <Edit title={<HostingServiceTitle />} {...props}>
    <HostingServiceForm />
  </Edit>
);

export default HostingServiceEdit;
