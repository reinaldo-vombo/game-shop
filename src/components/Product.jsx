'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const Product = ({ image, name, slug, price }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className='product-image'
            alt='Imagem do produto'
          />
          <div className='text-ellipsis overflow-hidden'>{name}</div>
          <div className='product-price'>${price}</div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
