import React from 'react';
import { Edit } from 'react-admin';
import HostingServiceForm from './HostingServiceForm';

const HostingServiceEdit = props => (
  <Edit {...props}>
    <HostingServiceForm />
  </Edit>
);

export default HostingServiceEdit;
