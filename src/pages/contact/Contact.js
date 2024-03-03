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
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor
    console.log(formData);
    toast.success('Message sent successfully!');
    setFormData({ firstName: '', lastName: '', message: '' });
  };

  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
      <div className={styles.about}>
        <h3>About Us </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Phone: 123-456-789</p>
        <p>Address: Calle Falsa 123, Ciudad Ficticia</p>
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

