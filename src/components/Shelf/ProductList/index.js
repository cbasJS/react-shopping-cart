import React from 'react';

import Product from './Product';

const ProductList = ({ products }) => {
  if(products.length === 0) {
    return (
      <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}>
        No hemos encontrado ningun resultado
      </div>
    )
  } else {
    return products.map(p => {
      return <Product product={p} key={p.id} />;
    });
  }
};

export default ProductList;
