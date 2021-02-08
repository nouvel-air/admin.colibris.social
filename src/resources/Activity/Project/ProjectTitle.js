import React from 'react';

const ProjectTitle = ({ record }) => {
  return <span>Projet {record ? `"${record['pair:label']}"` : ''}</span>;
};

export default ProjectTitle;
