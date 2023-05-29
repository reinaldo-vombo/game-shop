'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import Image from 'next/image';
import { urlFor } from '@/lib/client';

const HeroBanner = ({ bannerData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(bannerData);
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper w-full h-[31rem]'
      >
        {data.map((slider, index) => (
          <SwiperSlide key={index}>
            <img
              src={urlFor(slider.image)}
              alt='headphones'
              className='aspect-video w-full rounded-lg object-cover h-full relative'
            />
            <div className='bg-[#00000082] h-full top-0 w-full absolute' />
            <div className='absolute ml-4 top-[44%]'>
              <h1 className='text-[2.5rem]  w-[35rem] font-bold text-white'>
                {slider.desc}
              </h1>
              <button className='btn w-48 btn-active mt-8 btn-secondary'>
                Comprar
              </button>
            </div>
            <div className='absolute top-0 mt-3'>
              <span className=' top-0  text-base ml-3 w-[35rem] font-bold text-white'>
                {slider.saleTime}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroBanner;
