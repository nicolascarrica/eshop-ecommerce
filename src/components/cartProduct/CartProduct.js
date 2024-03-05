import React, { useState } from 'react'
import styles from './CartProduct.module.scss'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/slice/cartSlice';

const CartProduct = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  console.log(product)

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  }

  const handleRemove = () => {
    dispatch(removeFromCart({
      id: product.id,
      selectedColor: product.selectedColor,
      selectedSize: product.selectedSize
    }));
  }

  return (
    <div className={styles.productContainer}>
      <img src={product.img} alt={product.name} className={styles.productImage} />
      <div className={styles.productDetails}>
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>Color: {product.selectedColor}</p>
        <p>Size: {product.selectedSize}</p>
      </div>
        <div className={styles.quantityControls}>
          <button onClick={handleDecrement}>-</button>
          <input type="text" value={quantity} readOnly />
          <button onClick={handleIncrement}>+</button>
        </div>
        <p>Total: ${product.price * quantity}</p>
        <button  className={styles.removeButton} onClick={handleRemove}>x</button>
      </div>
  )
}

export default CartProduct
