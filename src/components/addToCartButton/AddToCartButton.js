import React from 'react';
import styles from './AddToCartButton.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slice/cartSlice';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const AddToCartButton = ({ product, selectedSize, selectedColor }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleAddToCart = () => {
    const productInCart = cart.find((item) => item.id === product.id && item.selectedSize === selectedSize && item.selectedColor === selectedColor);
  

  if (productInCart) {
    toast.warning('Product already in cart');
  }
  else {
    const productToAdd = { ...product, selectedSize, selectedColor };
    dispatch(addToCart(productToAdd));
    toast.success('Product added to cart');
  }

  }
  return (
    <div>
      <button className={styles.addToCartButton} onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
};


AddToCartButton.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    size: PropTypes.array.isRequired,
    color: PropTypes.array.isRequired,
  }).isRequired,
};
export default AddToCartButton;

