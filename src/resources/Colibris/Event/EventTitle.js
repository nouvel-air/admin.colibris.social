import React from 'react';

const EventTitle = ({ record }) => {
  return <span>Formation {record ? `"${record['pair:label']}"` : ''}</span>;
};

export default EventTitle;
