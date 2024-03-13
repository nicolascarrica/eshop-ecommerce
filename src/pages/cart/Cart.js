import React, { useEffect, useState } from 'react';
import CartProduct from '../../components/cartProduct/CartProduct';
import styles from './Cart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import emptyCart from '../../assets/empty-cart.webp'
import { removeAllCart, updateCart } from '../../redux/slice/cartSlice';
import { toast } from 'react-toastify';


const Cart = () => {

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  

  const [cart, setCart] = useState([]);
  const [deletedProducts, setDeletedProducts] = useState([]);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate()

  

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      setDeletedProducts([...deletedProducts, productId]);
      const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    } else{
      const updatedCart = cart.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item);
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      dispatch(updateCart({ id: productId, quantity: newQuantity }));
    }
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
  };

  const handleClearCart = () => {
    dispatch(removeAllCart());
    setCart([]);
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
        {cart.filter(product => !deletedProducts.includes(product.id)).map((product) => (
          <CartProduct 
            key={`${product.id}-${product.selectedColor}-${product.selectedSize}`} 
            product={product}
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