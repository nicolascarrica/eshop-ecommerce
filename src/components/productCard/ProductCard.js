import React from 'react';
import PropTypes from 'prop-types';
import style from './ProductCard.module.scss'
import { useDispatch } from 'react-redux';
import { singleProduct } from '../../redux/slice/productSlice';
import { Link, useParams} from 'react-router-dom';

const ProductCard = ({ id, name, img, colors, price, size }) => {
const dispatch = useDispatch();
const { type } = useParams();

  return (
    <Link to={`/filteredProducts/${type}/${id}`}>
        <div className={style['product-card']} onClick={() => dispatch(singleProduct(id))}>
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
    </Link>
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

