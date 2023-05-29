import React from 'react';
import { HeroBanner, Navbar, Products } from '../components';
import { client } from '@/lib/client';

const Hero = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-cente'>
        <HeroBanner bannerData={bannerData} />
        <Products products={products} />
      </div>
    </>
  );
};

export default Hero;
