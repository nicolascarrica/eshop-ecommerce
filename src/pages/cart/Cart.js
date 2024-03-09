import React, { useEffect, useState } from 'react';
import CartProduct from '../../components/cartProduct/CartProduct';
import styles from './Cart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import emptyCart from '../../assets/empty-cart.webp'
import { removeAllCart } from '../../redux/slice/cartSlice';
import { toast } from 'react-toastify';


const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [cartItems, setCartItems] = useState(cart);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate()

  const handleUpdateQuantity = (productId, newQuantity) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
  };

  const handleClearCart = () => {
    dispatch(removeAllCart());
    setCartItems([]);
    toast.success('Cart emptied');
  };
 
  const handleCheckOut = () => {
    if (!isLoggedIn) {
      navigate('/login')
    }else {
      navigate('/checkout')
    }
  }
  if (cart.length === 0) {
    return (
    <div className={styles.cartEmpty}>
      <div className={styles.imgContainer}>
        <img src={emptyCart} alt="empty cart" />
      </div>
      <Link to={'/'}>
        <button>Start shopping?</button>
      </Link>
    </div>
    )
      
  } else {
    
    return (
      <div className={styles.cartContainer}>
      <h1>It is your cart</h1>
      <h2>you have {cart.length} items in your cart</h2>
      <div className={styles.productsContainer}>
        {cart.map((product) => (
          <CartProduct 
            key={`${product.id}-${product.selectedColor}-${product.selectedSize}`} 
            product={product}
            quantity={product.quantity}
            onUpdateQuantity={handleUpdateQuantity}
          />
        ))}
      </div>
      <div>
        <div className={styles.checkoutContainer}>
            <button onClick={handleCheckOut}>Checkout</button>
          <p>Total: ${calculateTotalPrice()}</p>  
        </div>
        <div className={styles.buttonsContainer}>
          <Link to='/'>
            <button> Continue shopping </button>
          </Link>
          <button className={styles.clear} onClick={handleClearCart}>Clear cart</button>
        </div>

      </div>
      
    </div>
    )
  }
};

export default Cart;