'use client';
import { useStateContext } from '@/app/context/StateContext';
import React, { useEffect, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const ProductDetais = async () => {
  const { image, name, details, price, bgImage } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };

  return (
    <div className='quantity z-10'>
      <h3>Quantity:</h3>
      <p className='quantity-desc'>
        <span className='minus' onClick={decQty}>
          <AiOutlineMinus />
        </span>
        <span className='num'>{qty}</span>
        <span className='plus' onClick={incQty}>
          <AiOutlinePlus />
        </span>
      </p>
    </div>
  );
};

export default ProductDetais;
