import React from 'react';

const NeedTitle = ({ record }) => {
  return <span>Besoin {record ? `"${record['pair:label']}"` : ''}</span>;
};

export default NeedTitle;
