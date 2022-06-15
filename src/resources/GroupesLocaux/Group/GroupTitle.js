import React from 'react';

const GroupTitle = ({ record }) => {
  return <span>Groupe local {record ? `"${record['pair:label']}"` : ''}</span>;
};

export default GroupTitle;
