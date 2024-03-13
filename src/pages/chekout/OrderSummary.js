
import React from 'react';
import styles from './Checkout.module.scss';

const OrderSummary = ({ cart }) => {
  
  const SHIPPING_PRICE = 20;
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={styles.orderSummary}>
      <h2>Order Summary</h2>
      <table className={styles.summaryTable}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.summaryInfo}>
        <p>SubTotal: {totalPrice}</p>
        <p>Shipping Price: ${SHIPPING_PRICE}</p>
        <hr/>
        <strong><p>Total: ${(totalPrice + SHIPPING_PRICE).toFixed(2)}</p></strong>
      </div>
    </div>
  );
}

export default OrderSummary;