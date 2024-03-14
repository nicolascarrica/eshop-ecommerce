import React from 'react';
import PropTypes from 'prop-types';
import { storeData } from '../../assets/carriData';
import ProductCard from '../productCard/ProductCard';
import styles from './RandomProducts.module.scss';

const RandomProducts = ({ count }) => {

  const getRandomProducts = (data, count) => {
    const copiedData = [...data];
    const shuffled = copiedData.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  const randomProducts = getRandomProducts(storeData, count);

  return (
    <>
      <h2>Other customers also checked it out</h2>
      <div className={styles['random-products']}>  
        {randomProducts.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            img={product.img}
            colors={product.color}
            price={product.price}
            size={product.size}
          />
        ))}
      </div>
      
    </>
  );
};

RandomProducts.propTypes = {
  count: PropTypes.number.isRequired,
};

export default RandomProducts;