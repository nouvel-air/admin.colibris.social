import React from 'react';

const ProductTitle = ({ record }) => {
  return <span>Produit {record ? `"${record['pair:label']}"` : ''}</span>;
};

export default ProductTitle;
