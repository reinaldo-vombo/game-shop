'use client';
import { useStateContext } from '@/app/context/StateContext';
import React from 'react';

export default function Button() {
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };
  return (
    <div>
      <button
        class='btn btn-active btn-primary'
        onClick={() => onAdd(product, qty)}
      >
        Adicionar
      </button>
    </div>
  );
}
