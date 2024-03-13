import React, { useEffect, useState } from 'react';
import styles from './Checkout.module.scss';
import { useSelector } from 'react-redux';
import CheckoutForm from './CheckoutForm';
import OrderSummary from './OrderSummary';

const Checkout = () => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  return (
    <div className={styles.checkout}>
      <OrderSummary cart={cart} />
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
