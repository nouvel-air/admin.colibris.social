import React from 'react';

const DocumentTitle = ({ record }) => {
  return <span>Article {record ? `"${record['pair:label']}"` : ''}</span>;
};

export default DocumentTitle;
