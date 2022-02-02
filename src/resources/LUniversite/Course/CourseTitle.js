import React from 'react';

const CourseTitle = ({ record }) => {
  return <span>Formation {record ? `"${record['pair:label']}"` : ''}</span>;
};

export default CourseTitle;
