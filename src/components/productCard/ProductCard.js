import React from 'react';
import PropTypes from 'prop-types';
import style from './ProductCard.module.scss'

const ProductCard = ({ id, name, img, colors, price, size }) => {
  return (
    <div className={style['product-card']}>
      <img src={img} alt={name} className={style['product-image']} />
      <div className={style['product-details']}>
        <h3 className={style['product-name']}>{name}</h3>
        <p className={style['product-price']}>${price}</p>
        <ul className={style['product-colors']}>
          {colors?.map((color, index) => (
            <li key={index} style={{ backgroundColor: color }} className={style['color-option']}></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    size: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default ProductCard;

