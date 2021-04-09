import React from 'react';

const ServiceTitle = ({ record }) => {
  return <span>{record ? record['pair:label'] : ''}</span>;
};

export default ServiceTitle;
