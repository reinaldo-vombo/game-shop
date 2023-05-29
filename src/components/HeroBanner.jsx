'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import Image from 'next/image';

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
        className='mySwiper w-full'
      >
        {data.map((slider, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slider.immage}
              width={300}
              height={200}
              alt='product image'
            />
            <h1>{slider.desc}</h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroBanner;
