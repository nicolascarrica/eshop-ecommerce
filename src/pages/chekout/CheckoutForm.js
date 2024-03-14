import React, { useEffect, useState } from 'react';
import styles from './Checkout.module.scss';
import { useSelector } from 'react-redux';

const CheckoutForm = () => {
  const customerData = useSelector((state) => state.auth);
  const [customerInfo, setCustomerInfo] = useState({
    firstName: customerData.userName || '',
    email: customerData.email || '',
    phone: '',
  });

  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    city: '',
    country: '',
    postalCode: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const handleShippingInfoChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handlePaymentMethodChange = (e) => {
    const selectedMethod = e.target.value;
    setPaymentMethod(selectedMethod);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem('cart');
    window.location.href = ('/');
  };

  const renderPaymentForm = () => {
    if (paymentMethod === 'card') {
      return (
        <div>
          <h2>Card Information</h2>
          <label htmlFor="cardholderName">Cardholder Name</label>
          <input type="text" id="cardholderName" name="cardholderName" required />
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" name="cardNumber" required />
  
          <div className={styles.inlineInputs}>
            <div className={styles.inlineInput}>
              <label htmlFor="expirationDate">Expiration Date</label>
              <input type="text" placeholder='MM/YY' id="expirationDate" name="expirationDate" required />
            </div>
            <div className={styles.inlineInput}>
              <label htmlFor="cvv">CVV</label>
              <input type="number" id="cvv" name="cvv" required />
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
      <div className={styles.formContainer}>
        <h2>Customer Information</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">Name</label>
          <input type="text" id="firstName" name="firstName" value={customerInfo.firstName} onChange={handleCustomerInfoChange} required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={customerInfo.email} onChange={handleCustomerInfoChange} required />
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" value={customerInfo.phone} onChange={handleCustomerInfoChange} />
          <h2>Shipping Information</h2>
          <div className={styles.shippingInputs}>
            <div className={styles.inlineInput}>
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" value={shippingInfo.address} onChange={handleShippingInfoChange} required />
            </div>
            <div className={styles.inlineInput}>
              <label htmlFor="city">City:</label>
              <input type="text" id="city" name="city" value={shippingInfo.city} onChange={handleShippingInfoChange} required />
            </div>
          </div>
          <div className={styles.shippingInputs}>
            <div className={styles.inlineInput}>
              <label htmlFor="country">Country:</label>
              <input type="text" id="country" name="country" value={shippingInfo.country} onChange={handleShippingInfoChange} required />
            </div>
            <div className={styles.inlineInput}>
              <label htmlFor="postalCode">Postal Code:</label>
              <input type="text" id="postalCode" name="postalCode" value={shippingInfo.postalCode} onChange={handleShippingInfoChange} required />
            </div>
          </div>
          <h2>Payment Method</h2>
          <div className={styles.paymentMethod}>
          <select value={paymentMethod} onChange={handlePaymentMethodChange}>
            <option value="card">Credit Card</option>
            <option value="mercadoPago">Mercado Pago</option>
          </select>
          {renderPaymentForm()}
          </div>
          <button type="submit">Proceed to Checkout</button>
        </form>
      </div>
  );
};

export default CheckoutForm;
