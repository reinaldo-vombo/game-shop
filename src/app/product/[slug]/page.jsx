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

const Page = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const { name, details, price, bgImage } = product;
  // const [index, setIndex] = useState(0);
  // const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   setData(product);
  // }, []);

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };

  return (
    <div
      className='hero h-[35rem]'
      style={{
        backgroundImage: `url(${urlFor(bgImage)})`,
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='z-0 flex items-center max-w-[80rem] gap-1 p-1 text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>{name}</h1>
          <span>{price}(kz)</span>
          <p className='mb-5'>{details}</p>

          <Button />
        </div>
      </div>
    </div>
  );
};

export default Page;
