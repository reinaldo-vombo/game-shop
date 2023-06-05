import React from 'react';
import { client, urlFor } from '../../../lib/client';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai';
import { Product, ProductDetais } from '../../../components';
import { useStateContext } from '../../context/StateContext';
import Image from 'next/image';
import Button from '@/components/Button';
import QuantityButton from '@/components/QuantityButton';

const Page = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const { name, details, price, bgImage } = product;

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };

  return (
    <div
      className='hero bg-base-200 h-[35rem]'
      style={{
        backgroundImage: `url(${urlFor(bgImage)})`,
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='h-full w-full flex items-center'>
        <div className='max-w-md ml-5'>
          <h1 className='mb-5 text-gray-400 text-5xl font-bold'>{name}</h1>
          <p>{details}</p>
          <span>{price}(kz)</span>
          <p className='mb-5'>{details}</p>
          <QuantityButton />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Page;
