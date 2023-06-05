'use client';
import { useStateContext } from '@/app/context/StateContext';
import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export default function QuantityButton() {
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  return (
    <>
      <div className='flex w-[4rem] items-center gap-2 justify-center border border-white'>
        <span className='minus text-green-500 cursor-pointer' onClick={decQty}>
          <AiOutlineMinus />
        </span>
        <span className='num cursor-pointer text-white'>{qty}</span>
        <span className='plus text-red-600' onClick={incQty}>
          <AiOutlinePlus />
        </span>
      </div>
    </>
  );
}
