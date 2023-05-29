'use client';
import React, { useEffect, useState } from 'react';

const ProductDetais = async ({ product, products }) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(product);
  }, []);

  const { image, name, details, price, bgImage } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };

  return (
    <div className='relative'>
      <img
        src={urlFor(bgImage && bgImage)}
        className='product-detail-image-bg'
        alt=''
      />
    </div>
  );
};
export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
     slug {
       current
     }
   }`;

  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};
export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetais;
