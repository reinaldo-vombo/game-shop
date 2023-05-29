'use client';
import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../../../lib/client';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai';
import { Product } from '../../../components';
import { useStateContext } from '../../context/StateContext';

const Page = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  console.log(product);
  // const { name, details, price, bgImage } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   setData(product);
  // }, []);

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <h1>hrhgrhrhrh</h1>
      <h1>ffhhfght</h1>
    </div>
  );
};

export default Page;
