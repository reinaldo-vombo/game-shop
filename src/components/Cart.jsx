'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { toast, Toast } from 'react-hot-toast';
import getStripe from '../lib/getStrip';

import { useStateContext } from '../app/context/StateContext';
import { urlFor } from '../lib/client';

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItem,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItem),
    });
    if (response.statusCode === 500) return;

    const data = await response.json();
    console.log(data);

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <button
          type='button'
          className='cart-heading'
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className='heading'>Your Cart</span>
          <span className='cart-num-item'>({totalQuantities} items)</span>
        </button>

        {cartItem.length < 1 && (
          <div className='empty-cart'>
            <h3>Your shopping bag is empty</h3>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
              />
            </svg>
            <Link href='/'>
              <button
                type='button'
                onClick={() => setShowCart(false)}
                className='btn'
              >
                Continue shopping
              </button>
            </Link>
          </div>
        )}
        <div className='product-container'>
          {cartItem.length >= 1 &&
            cartItem.map((item, i) => (
              <div className='product' key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  className='cart-product-image'
                  alt=''
                />
                <div className='item-desc'>
                  <div className='flex top'>
                    <h5>{item.name}</h5>
                    <h4>{item.price}</h4>
                  </div>
                  <div className='flex bottom'>
                    <div>
                      <p className='quantity-desc'>
                        <span
                          className='minus'
                          onClick={() =>
                            toggleCartItemQuantity(item._id, 'dec')
                          }
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className='num' onClick={() => {}}>
                          {item.quantity}
                        </span>
                        <span
                          className='plus'
                          onClick={() =>
                            toggleCartItemQuantity(item._id, 'inc')
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type='button'
                      className='remove-item'
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItem.length >= 1 && (
          <div className='cart-bottom'>
            <div className='total'>
              <h3>SubTotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className='btn-container' />
            <button type='button' className='btn' onClick={handleCheckout}>
              Pay with Stripe
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
