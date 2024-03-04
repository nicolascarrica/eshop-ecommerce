import React, { useState } from 'react';
import styles from './Contact.module.scss';
import { toast, ToasContainer } from 'react-toastify';


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toast.success('Message sent successfully!');
    setFormData({ firstName: '', lastName: '', message: '' });
  };

  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
      <div className={styles.about}>
        <h3>About Us </h3>
        <h3>Welcome to CarriShop</h3>  
        <p>At CarriShop, our commitment goes beyond offering high-quality products;
          we also strive to provide an exceptional shopping experience.
          Our team of fashion and sports experts is always available to provide personalized advice and ensure you find exactly what you need to achieve your fitness goals and look great while doing it.
        </p>
        <br/>
        <p>
          Whether you're a professional athlete or a casual fitness enthusiast, at CarriShop Apparel, you'll find everything you need to stay active, motivated, and ready to tackle any challenge you set for yourself. Join our community today and discover how style and performance can go hand in hand at every step of your fitness journey!  
        </p>
        <br/>
        <p><b>Phone: </b> 123-456-789</p>
        <br/>
        <p><b>Address:</b> Calle Falsa 123, Ciudad Ficticia</p>
      </div>
      <div className={styles.formContainer}>
        <h3>Contact Form</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="firstName"
              placeholder="Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
      <div className={styles.socialLinks}>
        <h3>Social Links:</h3>
        <ul>
          <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://wa.me/" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;

