import React from 'react';

const ThemeTitle = ({ record }) => {
  return <span>Thème {record ? `"${record['pair:label']}"` : ''}</span>;
};

export default ThemeTitle;
