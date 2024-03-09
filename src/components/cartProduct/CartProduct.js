import React, { useEffect, useState } from 'react'
import styles from './CartProduct.module.scss'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/slice/cartSlice';
import { toast } from 'react-toastify';

const CartProduct = ({ product, onUpdateQuantity }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const dispatch = useDispatch();

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      onUpdateQuantity(product.id, quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    onUpdateQuantity(product.id, quantity + 1);
  };

  const handleRemove = () => {
    dispatch(removeFromCart({
      id: product.id,
      selectedColor: product.selectedColor,
      selectedSize: product.selectedSize
    }));
    onUpdateQuantity(product.id, 0);
    toast.warning('Product removed from cart');
  }
  
  const totalPrice = product.price*quantity

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
          <input type="text" value={quantity} readOnly/>
          <button onClick={handleIncrement}>+</button>
        </div>
        <p>Total: ${totalPrice}</p>
        <button  className={styles.removeButton} onClick={handleRemove}>x</button>
      </div>
  )
}

export default CartProduct
