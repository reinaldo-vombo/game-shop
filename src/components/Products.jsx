import React from 'react';
import Product from './Product';

const Products = ({ products }) => {
  return (
    <>
      <div className='products-heading '>
        <h2>Best Selling products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className='grid grid-cols-3'>
        {products?.map((product, index) => (
          <Product
            key={product._id}
            image={product.image}
            slug={product.slug}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
